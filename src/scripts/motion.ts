import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Lenis from 'lenis';

gsap.registerPlugin(ScrollTrigger);

let lenis: Lenis | undefined;
const header = document.querySelector<HTMLElement>('[data-header]');
const dialog = document.querySelector<HTMLDialogElement>('#site-menu');
const menuButton = document.querySelector<HTMLButtonElement>('[data-menu-open]');

const updateHeader = () => header?.classList.toggle('is-scrolled', window.scrollY > 40);
updateHeader();
window.addEventListener('scroll', updateHeader, { passive: true });

function restoreMenu() {
  document.documentElement.classList.remove('menu-open');
  menuButton?.setAttribute('aria-expanded', 'false');
  lenis?.start();
}

function closeMenu() {
  if (!dialog?.open) return;
  dialog.close();
  restoreMenu();
}

if (dialog && menuButton && typeof dialog.showModal === 'function') {
  menuButton.hidden = false;
  menuButton.addEventListener('click', () => {
    lenis?.stop();
    dialog.showModal();
    document.documentElement.classList.add('menu-open');
    menuButton.setAttribute('aria-expanded', 'true');
  });
  dialog.querySelector<HTMLButtonElement>('[data-menu-close]')?.addEventListener('click', closeMenu);
  dialog.addEventListener('close', restoreMenu);
}

// Keep normal anchor destinations and browser history while enhancing PC scrolling.
document.querySelectorAll<HTMLAnchorElement>('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', event => {
    if (event.ctrlKey || event.metaKey || event.shiftKey || event.altKey || event.button !== 0) return;
    const hash = anchor.getAttribute('href');
    if (!hash || hash === '#') return;
    const target = document.getElementById(hash.slice(1));
    if (!target) return;
    event.preventDefault();
    closeMenu();
    if (window.location.hash !== hash) history.pushState(null, '', hash);
    const finish = () => {
      const hadTabindex = target.hasAttribute('tabindex');
      if (!hadTabindex) target.setAttribute('tabindex', '-1');
      target.focus({ preventScroll: true });
      if (!hadTabindex) target.addEventListener('blur', () => target.removeAttribute('tabindex'), { once: true });
    };
    if (lenis) {
      lenis.scrollTo(target, { offset: hash === '#top' ? 0 : -96, onComplete: finish });
    } else {
      target.scrollIntoView({ behavior: 'auto', block: 'start' });
      finish();
    }
  });
});

const media = gsap.matchMedia();
media.add({
  reduce: '(prefers-reduced-motion: reduce)',
  desktop: '(min-width: 761px) and (pointer: fine)',
  motion: '(prefers-reduced-motion: no-preference)',
}, context => {
  if (context.conditions?.reduce) return;

  let ticker: ((time: number) => void) | undefined;
  let activeLenis: Lenis | undefined;
  if (context.conditions?.desktop) {
    activeLenis = new Lenis({ duration: 1.05, smoothWheel: true, syncTouch: false, autoRaf: false });
    lenis = activeLenis;
    activeLenis.on('scroll', ScrollTrigger.update);
    ticker = time => activeLenis?.raf(time * 1000);
    gsap.ticker.add(ticker);
    if (dialog?.open) activeLenis.stop();
  }

  gsap.from('[data-hero-art] picture', { scale: 1.035, duration: 1.6, ease: 'power2.out', clearProps: 'transform' });
  gsap.from('[data-hero-logo]', { y: 14, opacity: 0, duration: 1.1, delay: .12, ease: 'power2.out', clearProps: 'opacity,transform' });
  gsap.from('[data-hero-copy]', { y: 10, opacity: 0, duration: 1, delay: .35, ease: 'power2.out', clearProps: 'opacity,transform' });

  gsap.utils.toArray<HTMLElement>('[data-reveal]').forEach(element => {
    gsap.from(element, {
      y: 22,
      opacity: 0,
      duration: .85,
      ease: 'power2.out',
      clearProps: 'opacity,transform',
      scrollTrigger: { trigger: element, start: 'top 93%', once: true },
    });
  });

  if (context.conditions?.desktop) {
    gsap.to('[data-hero-art]', {
      yPercent: 5,
      ease: 'none',
      scrollTrigger: { trigger: '[data-hero]', start: 'top top', end: 'bottom top', scrub: .6 },
    });
    // Animate the inner image so the photo's reveal transform stays independent.
    document.querySelectorAll<HTMLElement>('[data-parallax]').forEach(figure => {
      const image = figure.querySelector('img');
      if (!image) return;
      gsap.fromTo(image, { yPercent: -3, scale: 1.07 }, {
        yPercent: 3,
        scale: 1.07,
        ease: 'none',
        scrollTrigger: { trigger: figure, start: 'top bottom', end: 'bottom top', scrub: .8 },
      });
    });
  }

  return () => {
    if (ticker) gsap.ticker.remove(ticker);
    activeLenis?.destroy();
    if (lenis === activeLenis) lenis = undefined;
  };
});

document.fonts.ready.then(() => ScrollTrigger.refresh());
window.addEventListener('load', () => ScrollTrigger.refresh(), { once: true });
