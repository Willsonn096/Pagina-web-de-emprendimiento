/**
 * ==========================================================================
 * PRESENCIA Y COBERTURA DIGITAL - SCRIPT PRINCIPAL (SCRIPT.JS)
 * Lógica completa, modular e interactiva del sitio web:
 * 1. Navbar con efecto blur al hacer scroll
 * 2. Menú móvil interactivo (Hamburguesa)
 * 3. Navegación activa con scrollspy
 * 4. Acordeón de Preguntas Frecuentes (FAQ)
 * 5. Filtrado dinámico de portafolio/resultados
 * 6. Formulario de asesoría con validación y toast de confirmación
 * 7. Flujo completo de Checkout Modal (Resumen, Datos, Métodos de Pago, Éxito)
 * 8. Modal detallado de Servicios
 * ==========================================================================
 */

// --------------------------------------------------
// 1. DATOS DE PAQUETES (VENTA DE SERVICIOS)
// --------------------------------------------------
const PACKAGES_DATA = {
  presencia: {
    id: 'presencia',
    name: 'Paquete Presencia',
    price: '$[PRECIO]',
    idealFor: 'Ideal para negocios que están comenzando a construir su presencia digital.',
    services: [
      '[Servicio incluido 1]',
      '[Servicio incluido 2]',
      '[Servicio incluido 3]',
      '[Servicio incluido 4]'
    ]
  },
  crecimiento: {
    id: 'crecimiento',
    name: 'Paquete Crecimiento',
    price: '$[PRECIO]',
    badge: 'MÁS ELEGIDO',
    idealFor: 'Ideal para negocios que quieren aumentar su presencia y comenzar a generar más oportunidades.',
    services: [
      '[Servicio incluido 1]',
      '[Servicio incluido 2]',
      '[Servicio incluido 3]',
      '[Servicio incluido 4]',
      '[Servicio incluido 5]'
    ]
  },
  impulso: {
    id: 'impulso',
    name: 'Paquete Impulso',
    price: '$[PRECIO]',
    idealFor: 'Para negocios que buscan una estrategia digital más completa.',
    services: [
      '[Servicio incluido 1]',
      '[Servicio incluido 2]',
      '[Servicio incluido 3]',
      '[Servicio incluido 4]',
      '[Servicio incluido 5]',
      '[Servicio incluido 6]'
    ]
  }
};

// --------------------------------------------------
// 2. DATOS DETALLADOS DE SERVICIOS
// --------------------------------------------------
const SERVICES_DATA = {
  redes: {
    title: 'Gestión de Redes Sociales',
    tag: 'Presencia & Comunidad',
    description: 'Construimos y gestionamos la presencia de tu marca en las principales plataformas para conectar de forma auténtica y profesional con tu público objetivo.',
    features: [
      'Creación y redacción de contenido estratégico adaptado a tu sector',
      'Diseño visual de publicaciones coherente con tu identidad de marca',
      'Planificación y calendario mensual de publicaciones',
      'Optimización completa de perfiles (biografía, enlaces, historias destacadas)',
      'Estrategia de interacción y crecimiento orgánico'
    ],
    benefit: 'Asegura que tu marca se mantenga activa, relevante y proyecte una imagen de confianza todos los días.'
  },
  contenido: {
    title: 'Creación de Contenido',
    tag: 'Creatividad & Impacto Visual',
    description: 'Diseñamos piezas audiovisuales y gráficas de alto valor para captar la atención de usuarios en el dinámico ecosistema digital.',
    features: [
      'Diseños estáticos y carruseles informativos para redes',
      'Reels y videos cortos optimizados para algoritmos actuales',
      'Contenido promocional para lanzamientos u ofertas especiales',
      'Piezas creativas para campañas publicitarias',
      'Adaptación de formatos para Instagram, TikTok y Facebook'
    ],
    benefit: 'Comunica el verdadero valor y calidad de tus productos o servicios mediante piezas que generan interacción.'
  },
  publicidad: {
    title: 'Publicidad Digital',
    tag: 'Alcance & Tráfico Cualificado',
    description: 'Diseñamos e implementamos campañas de anuncios pagados en Meta Ads y Google para llevar tu mensaje exactamente a las personas indicadas.',
    features: [
      'Creación integral y estructuración de campañas publicitarias',
      'Configuración técnica y verificación de píxeles/eventos',
      'Segmentación estratégica por intereses, demografía y comportamientos',
      'Monitoreo y optimización continua de presupuestos',
      'Análisis de métricas de rendimiento y costo por resultado'
    ],
    benefit: 'Multiplica la visibilidad de tu negocio llegando a potenciales clientes fuera de tu círculo orgánico actual.'
  },
  estrategia: {
    title: 'Estrategia Digital',
    tag: 'Planificación & Dirección',
    description: 'Trazamos la ruta que debe seguir tu negocio en internet para no dar pasos a ciegas, alineando cada acción con tus metas comerciales.',
    features: [
      'Diagnóstico profundo del estado digital actual de tu negocio',
      'Definición y análisis detallado de tu público objetivo ideal',
      'Estudio del entorno competitivo y oportunidades desaprovechadas',
      'Estrategia de crecimiento estructurada por etapas',
      'Plan de acción claro con prioridades y canales recomendados'
    ],
    benefit: 'Ahorra tiempo y recursos enfocando tus esfuerzos en los canales y mensajes que generan oportunidades reales.'
  },
  branding: {
    title: 'Branding y Presencia Digital',
    tag: 'Identidad & Confianza',
    description: 'Construimos una imagen visual sólida y memorable que transmita el profesionalismo y prestigio que tu negocio merece.',
    features: [
      'Definición de identidad visual, tipografías y paleta cromática',
      'Optimización estética y unificación de perfiles digitales',
      'Diseño de plantillas y piezas clave para comunicación de marca',
      'Manual de estilo para mantener consistencia en todos los puntos de contacto'
    ],
    benefit: 'Logra que tu negocio sea reconocido al instante y genere credibilidad inmediata frente a nuevos prospectos.'
  },
  leads: {
    title: 'Generación de Clientes Potenciales',
    tag: 'Conversión & Captación',
    description: 'Estructuramos canales y páginas de aterrizaje diseñadas para recibir el tráfico interesado y convertirlo en consultas y contactos comerciales.',
    features: [
      'Diseño y desarrollo de Landing Pages optimizadas para conversión',
      'Implementación de formularios intuitivos y directos',
      'Estrategias de captación de prospectos cualificados',
      'Integración con WhatsApp y canales de respuesta ágil',
      'Optimización constante de la tasa de conversión (CRO)'
    ],
    benefit: 'Transforma visitantes pasivos en conversaciones comerciales listas para que tu equipo comercial las atienda.'
  }
};

// --------------------------------------------------
// 3. INICIALIZACIÓN CUANDO EL DOM ESTÁ LISTO
// --------------------------------------------------
document.addEventListener('DOMContentLoaded', () => {

  // --------------------------------------------------
  // A. NAVBAR SCROLL EFFECT
  // --------------------------------------------------
  const header = document.querySelector('.header');
  if (header) {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 40) {
        header.classList.add('scrolled');
      } else {
        header.classList.remove('scrolled');
      }
    });
  }

  // --------------------------------------------------
  // B. MENÚ MÓVIL (HAMBURGUESA)
  // --------------------------------------------------
  const navToggle = document.getElementById('nav-toggle');
  const navMenu = document.getElementById('nav-menu');
  const navLinks = document.querySelectorAll('.nav-link');

  if (navToggle && navMenu) {
    navToggle.addEventListener('click', () => {
      navToggle.classList.toggle('open');
      navMenu.classList.toggle('open');
      document.body.classList.toggle('menu-open');
    });

    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        navToggle.classList.remove('open');
        navMenu.classList.remove('open');
        document.body.classList.remove('menu-open');
      });
    });
  }

  // --------------------------------------------------
  // C. NAVEGACIÓN ACTIVA (SCROLLSPY)
  // --------------------------------------------------
  const sections = document.querySelectorAll('section[id]');
  window.addEventListener('scroll', () => {
    const scrollY = window.pageYOffset;

    sections.forEach(current => {
      const sectionHeight = current.offsetHeight;
      const sectionTop = current.offsetTop - 120;
      const sectionId = current.getAttribute('id');
      const targetNavLink = document.querySelector(`.nav-menu a[href*="${sectionId}"]`);

      if (targetNavLink) {
        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
          targetNavLink.classList.add('active');
        } else {
          targetNavLink.classList.remove('active');
        }
      }
    });
  });

  // --------------------------------------------------
  // D. PREGUNTAS FRECUENTES (FAQ ACORDEÓN)
  // --------------------------------------------------
  const faqItems = document.querySelectorAll('.faq-item');

  faqItems.forEach(item => {
    const trigger = item.querySelector('.faq-trigger');
    const panel = item.querySelector('.faq-panel');

    if (trigger && panel) {
      trigger.addEventListener('click', () => {
        const isActive = item.classList.contains('active');

        // Cerrar otros elementos abiertos para una navegación limpia
        faqItems.forEach(otherItem => {
          otherItem.classList.remove('active');
          const otherPanel = otherItem.querySelector('.faq-panel');
          if (otherPanel) otherPanel.style.maxHeight = null;
        });

        // Alternar el elemento seleccionado
        if (!isActive) {
          item.classList.add('active');
          panel.style.maxHeight = panel.scrollHeight + 'px';
        } else {
          item.classList.remove('active');
          panel.style.maxHeight = null;
        }
      });
    }
  });

  // --------------------------------------------------
  // E. FILTRADO DE RESULTADOS / PORTAFOLIO
  // --------------------------------------------------
  const filterButtons = document.querySelectorAll('.filter-btn');
  const portfolioItems = document.querySelectorAll('.portfolio-item');

  filterButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      filterButtons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filterValue = btn.getAttribute('data-filter');

      portfolioItems.forEach(item => {
        const itemCategory = item.getAttribute('data-category');
        if (filterValue === 'all' || itemCategory === filterValue) {
          item.style.display = 'flex';
          setTimeout(() => {
            item.style.opacity = '1';
            item.style.transform = 'scale(1)';
          }, 50);
        } else {
          item.style.opacity = '0';
          item.style.transform = 'scale(0.95)';
          setTimeout(() => {
            item.style.display = 'none';
          }, 200);
        }
      });
    });
  });

  // --------------------------------------------------
  // F. BOTÓN "SOLICITAR PROPUESTA PERSONALIZADA"
  // --------------------------------------------------
  const requestProposalBtn = document.getElementById('btn-request-proposal');
  if (requestProposalBtn) {
    requestProposalBtn.addEventListener('click', (e) => {
      e.preventDefault();
      const contactSection = document.getElementById('contacto');
      const serviceSelect = document.getElementById('contact-service');
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: 'smooth' });
        if (serviceSelect) {
          serviceSelect.value = 'Propuesta Personalizada';
        }
      }
    });
  }

  // --------------------------------------------------
  // G. FORMULARIO DE CONTACTO (ASESORÍA)
  // --------------------------------------------------
  const contactForm = document.getElementById('advisory-contact-form');
  const formStatusMsg = document.getElementById('contact-form-status');

  if (contactForm && formStatusMsg) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();

      if (!contactForm.checkValidity()) {
        contactForm.reportValidity();
        return;
      }

      formStatusMsg.textContent = '¡Gracias por contactar a Presencia y Cobertura Digital! Hemos recibido la información de tu negocio y nuestro equipo se comunicará contigo a la brevedad.';
      formStatusMsg.className = 'form-status-msg success';
      formStatusMsg.style.display = 'block';

      contactForm.reset();

      setTimeout(() => {
        formStatusMsg.style.display = 'none';
      }, 7000);
    });
  }

  // --------------------------------------------------
  // H. PROCESO DE COMPRA & CHECKOUT MODAL
  // --------------------------------------------------
  const checkoutModal = document.getElementById('checkout-modal');
  const checkoutCloseBtn = document.getElementById('checkout-modal-close');
  const step1 = document.getElementById('checkout-step-1');
  const step2 = document.getElementById('checkout-step-2');
  const step3 = document.getElementById('checkout-step-3');
  const checkoutForm = document.getElementById('checkout-client-form');
  const toStep2Btn = document.getElementById('btn-to-step-2');
  const backToStep1Btn = document.getElementById('btn-back-to-step-1');
  const finalizePaymentBtn = document.getElementById('btn-finalize-payment');
  const returnHomeBtn = document.getElementById('btn-return-home');
  const paymentMethodCards = document.querySelectorAll('.payment-method-card');

  let currentSelectedPackage = PACKAGES_DATA.crecimiento;
  let currentStep = 1;
  let selectedPaymentMethod = 'Tarjeta de crédito/débito';

  // Abrir modal desde botones de compra
  const buyButtons = document.querySelectorAll('.btn-buy-package');
  buyButtons.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const pkgKey = btn.getAttribute('data-package') || 'crecimiento';
      openCheckoutModal(pkgKey);
    });
  });

  function openCheckoutModal(pkgKey) {
    if (!checkoutModal) return;
    currentSelectedPackage = PACKAGES_DATA[pkgKey] || PACKAGES_DATA.crecimiento;
    currentStep = 1;
    updateCheckoutView();

    if (checkoutForm) {
      checkoutForm.reset();
    }

    checkoutModal.classList.add('show');
    document.body.style.overflow = 'hidden';
  }

  function closeCheckoutModal() {
    if (!checkoutModal) return;
    checkoutModal.classList.remove('show');
    document.body.style.overflow = '';
  }

  if (checkoutCloseBtn) checkoutCloseBtn.addEventListener('click', closeCheckoutModal);
  if (checkoutModal) {
    checkoutModal.addEventListener('click', (e) => {
      if (e.target === checkoutModal) closeCheckoutModal();
    });
  }

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      if (checkoutModal && checkoutModal.classList.contains('show')) {
        closeCheckoutModal();
      }
      if (serviceModal && serviceModal.classList.contains('show')) {
        closeServiceModal();
      }
    }
  });

  function updateCheckoutView() {
    const pkgNameEl = document.getElementById('summary-pkg-name');
    const pkgPriceEl = document.getElementById('summary-pkg-price');
    const pkgServicesListEl = document.getElementById('summary-pkg-services');

    if (pkgNameEl) pkgNameEl.textContent = currentSelectedPackage.name;
    if (pkgPriceEl) pkgPriceEl.textContent = currentSelectedPackage.price;

    if (pkgServicesListEl) {
      pkgServicesListEl.innerHTML = '';
      currentSelectedPackage.services.forEach(srv => {
        const item = document.createElement('div');
        item.className = 'summary-service-pill';
        item.innerHTML = `
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#2563EB" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
            <polyline points="20 6 9 17 4 12"></polyline>
          </svg>
          <span>${srv}</span>
        `;
        pkgServicesListEl.appendChild(item);
      });
    }

    if (step1) step1.classList.toggle('active', currentStep === 1);
    if (step2) step2.classList.toggle('active', currentStep === 2);
    if (step3) step3.classList.toggle('active', currentStep === 3);

    const modalTitleEl = document.getElementById('checkout-modal-title');
    if (modalTitleEl) {
      if (currentStep === 1) {
        modalTitleEl.textContent = 'Completa tu solicitud';
      } else if (currentStep === 2) {
        modalTitleEl.textContent = 'Método de pago';
      } else {
        modalTitleEl.textContent = '¡Solicitud recibida!';
      }
    }
  }

  if (toStep2Btn && checkoutForm) {
    toStep2Btn.addEventListener('click', (e) => {
      e.preventDefault();
      if (!checkoutForm.checkValidity()) {
        checkoutForm.reportValidity();
        return;
      }
      currentStep = 2;
      updateCheckoutView();
    });
  }

  if (backToStep1Btn) {
    backToStep1Btn.addEventListener('click', (e) => {
      e.preventDefault();
      currentStep = 1;
      updateCheckoutView();
    });
  }

  paymentMethodCards.forEach(card => {
    card.addEventListener('click', () => {
      paymentMethodCards.forEach(c => c.classList.remove('selected'));
      card.classList.add('selected');
      selectedPaymentMethod = card.getAttribute('data-method') || 'Tarjeta de crédito/débito';
    });
  });

  if (finalizePaymentBtn) {
    finalizePaymentBtn.addEventListener('click', (e) => {
      e.preventDefault();
      currentStep = 3;
      updateCheckoutView();
    });
  }

  if (returnHomeBtn) {
    returnHomeBtn.addEventListener('click', () => {
      closeCheckoutModal();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  // --------------------------------------------------
  // I. MODAL DETALLADO DE SERVICIOS
  // --------------------------------------------------
  const serviceModal = document.getElementById('service-detail-modal');
  const serviceCloseBtn = document.getElementById('service-modal-close');
  const serviceTitleEl = document.getElementById('service-modal-title');
  const serviceTagEl = document.getElementById('service-modal-tag');
  const serviceDescEl = document.getElementById('service-modal-desc');
  const serviceFeaturesListEl = document.getElementById('service-modal-features');
  const serviceBenefitEl = document.getElementById('service-modal-benefit');
  const serviceModalCtaBtn = document.getElementById('service-modal-cta');

  const openServiceButtons = document.querySelectorAll('.btn-view-service');
  openServiceButtons.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const serviceKey = btn.getAttribute('data-service');
      const data = SERVICES_DATA[serviceKey];
      if (!data || !serviceModal) return;

      if (serviceTitleEl) serviceTitleEl.textContent = data.title;
      if (serviceTagEl) serviceTagEl.textContent = data.tag;
      if (serviceDescEl) serviceDescEl.textContent = data.description;
      if (serviceBenefitEl) serviceBenefitEl.textContent = data.benefit;

      if (serviceFeaturesListEl) {
        serviceFeaturesListEl.innerHTML = '';
        data.features.forEach(f => {
          const li = document.createElement('li');
          li.className = 'service-feature-item';
          li.innerHTML = `
            <span class="feature-check-icon">✓</span>
            <span>${f}</span>
          `;
          serviceFeaturesListEl.appendChild(li);
        });
      }

      serviceModal.classList.add('show');
      document.body.style.overflow = 'hidden';
    });
  });

  function closeServiceModal() {
    if (!serviceModal) return;
    serviceModal.classList.remove('show');
    document.body.style.overflow = '';
  }

  if (serviceCloseBtn) serviceCloseBtn.addEventListener('click', closeServiceModal);
  if (serviceModal) {
    serviceModal.addEventListener('click', (e) => {
      if (e.target === serviceModal) closeServiceModal();
    });
  }

  if (serviceModalCtaBtn) {
    serviceModalCtaBtn.addEventListener('click', () => {
      closeServiceModal();
      const target = document.getElementById('contacto');
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
      }
    });
  }
});
