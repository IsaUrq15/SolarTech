// SolarTech Solutions - Enhanced JavaScript with Bug Fixes

// Application Data with Updated 14 Products
const appData = {
  products: [
    // PANELES (4 productos)
    {
      id: 1,
      name: "Panel Solar Monocristalino 450W",
      category: "paneles",
      price: "$299.990",
      description: "Panel solar de alta eficiencia con tecnología monocristalina. Ideal para instalaciones residenciales y comerciales.",
      icon: "panel"
    },
    {
      id: 2,
      name: "Panel Solar Policristalino 380W",
      category: "paneles",
      price: "$239.990", 
      description: "Panel solar policristalino de excelente relación calidad-precio. Perfecto para proyectos de gran escala.",
      icon: "panel"
    },
    {
      id: 3,
      name: "Panel Solar Bifacial 500W",
      category: "paneles",
      price: "$349.990",
      description: "Panel solar bifacial de última generación que aprovecha la luz solar por ambos lados para máxima eficiencia.",
      icon: "panel"
    },
    {
      id: 4,
      name: "Panel Solar Flexible 200W",
      category: "paneles",
      price: "$199.990",
      description: "Panel solar flexible y liviano, ideal para instalaciones en superficies curvas o móviles como embarcaciones.",
      icon: "panel"
    },
    
    // KITS (2 productos)
    {
      id: 5,
      name: "Kit Solar Residencial 5kW",
      category: "kits", 
      price: "$2.499.990",
      description: "Kit completo para instalación residencial. Incluye paneles, inversor, estructura de montaje y accesorios.",
      icon: "kit"
    },
    {
      id: 6,
      name: "Kit Solar Comercial 20kW",
      category: "kits",
      price: "$8.999.990",
      description: "Solución integral para empresas. Incluye paneles de alta potencia, inversor trifásico y monitoreo avanzado.",
      icon: "kit"
    },
    
    // BATERÍAS (6 productos)
    {
      id: 7,
      name: "Batería Litio 10kWh",
      category: "baterias",
      price: "$1.899.990",
      description: "Sistema de almacenamiento de energía con batería de litio de última generación. Vida útil extendida.",
      icon: "battery"
    },
    {
      id: 8,
      name: "Batería Litio 5kWh",
      category: "baterias",
      price: "$999.990",
      description: "Batería de litio compacta para hogares. Ideal para backup de energía y autoconsumo nocturno.",
      icon: "battery"
    },
    {
      id: 9,
      name: "Batería AGM 200Ah",
      category: "baterias",
      price: "$399.990",
      description: "Batería AGM de ciclo profundo, libre de mantenimiento. Excelente para sistemas off-grid.",
      icon: "battery"
    },
    {
      id: 10,
      name: "Batería Gel 150Ah",
      category: "baterias",
      price: "$349.990",
      description: "Batería de gel con alta durabilidad y resistencia a temperaturas extremas. Ideal para aplicaciones remotas.",
      icon: "battery"
    },
    {
      id: 11,
      name: "Batería LiFePO4 20kWh",
      category: "baterias",
      price: "$3.499.990",
      description: "Batería de fosfato de hierro y litio de gran capacidad. Máxima seguridad y vida útil para aplicaciones comerciales.",
      icon: "battery"
    },
    {
      id: 12,
      name: "Batería Portátil 2kWh",
      category: "baterias",
      price: "$599.990",
      description: "Estación de energía portátil con múltiples puertos. Perfecta para camping, emergencias y uso móvil.",
      icon: "battery"
    },
    
    // ACCESORIOS (2 productos)
    {
      id: 13,
      name: "Inversor Híbrido 8kW",
      category: "accesorios",
      price: "$899.990",
      description: "Inversor híbrido inteligente con monitoreo remoto y capacidad de conexión a red y baterías.",
      icon: "inverter"
    },
    {
      id: 14,
      name: "Controlador de Carga MPPT 60A",
      category: "accesorios",
      price: "$299.990",
      description: "Controlador de carga MPPT de alta eficiencia con pantalla LCD y conectividad Bluetooth para monitoreo.",
      icon: "controller"
    }
  ]
};

// SVG Icons for products
const productIcons = {
  panel: `<svg width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
    <rect width="18" height="18" x="3" y="3" rx="2" ry="2"/>
    <path d="M9 3v18"/>
    <path d="M15 3v18"/>
    <path d="M3 9h18"/>
    <path d="M3 15h18"/>
    <circle cx="12" cy="12" r="2" fill="currentColor"/>
  </svg>`,
  
  kit: `<svg width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
    <rect width="20" height="14" x="2" y="5" rx="2" ry="2"/>
    <path d="M8 19H6.5A1.5 1.5 0 0 1 5 17.5V14"/>
    <path d="M16 19h1.5a1.5 1.5 0 0 0 1.5-1.5V14"/>
    <path d="M12 2v3"/>
    <path d="m8.5 8.5 7 7"/>
    <path d="m15.5 8.5-7 7"/>
  </svg>`,
  
  battery: `<svg width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
    <rect width="16" height="10" x="2" y="7" rx="2" ry="2"/>
    <path d="M22 11v2"/>
    <path d="M6 11v2"/>
    <path d="M10 11v2"/>
    <path d="M14 11v2"/>
  </svg>`,
  
  inverter: `<svg width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
    <rect width="18" height="12" x="3" y="6" rx="2" ry="2"/>
    <path d="M8 10h8"/>
    <path d="M8 14h8"/>
    <circle cx="7" cy="12" r="1" fill="currentColor"/>
    <circle cx="17" cy="12" r="1" fill="currentColor"/>
    <path d="M12 2v4"/>
  </svg>`,
  
  controller: `<svg width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
    <rect width="20" height="12" x="2" y="6" rx="2" ry="2"/>
    <path d="M6 10h4"/>
    <path d="M14 10h4"/>
    <path d="M8 14h8"/>
    <circle cx="18" cy="10" r="1" fill="currentColor"/>
    <path d="M12 2v4"/>
    <path d="M12 18v4"/>
  </svg>`
};

// Global variables
let isInitialized = false;
let currentFilter = 'todos';

// Initialize Application
document.addEventListener('DOMContentLoaded', function() {
  console.log('DOM Content Loaded - Initializing Enhanced SolarTech Solutions');
  
  setTimeout(() => {
    initializeApp();
  }, 100);
});

function initializeApp() {
  if (isInitialized) return;
  
  try {
    console.log('Starting enhanced app initialization...');
    
    setupEventListeners();
    renderProducts();
    initializeAnimations();
    initializeScrollEffects();
    
    isInitialized = true;
    console.log('Enhanced app initialization completed successfully');
  } catch (error) {
    console.error('Error during app initialization:', error);
  }
}

// Setup Event Listeners - FIXED
function setupEventListeners() {
  console.log('Setting up enhanced event listeners...');
  
  // Scroll events
  window.addEventListener('scroll', handleScroll);
  
  // Quote buttons - FIXED to handle all quote buttons properly
  setupQuoteButtons();
  
  // Scroll to top button
  const scrollToTopBtn = document.getElementById('scrollToTop');
  if (scrollToTopBtn) {
    scrollToTopBtn.addEventListener('click', function(e) {
      e.preventDefault();
      console.log('Scroll to top clicked');
      window.scrollTo({ 
        top: 0, 
        behavior: 'smooth' 
      });
    });
  }
  
  // Mobile menu toggle
  const mobileMenuToggle = document.getElementById('mobileMenuToggle');
  const nav = document.getElementById('nav');
  if (mobileMenuToggle && nav) {
    mobileMenuToggle.addEventListener('click', function() {
      toggleMobileMenu(nav);
    });
  }
  
  // Navigation links
  document.querySelectorAll('.nav__link').forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      const target = this.getAttribute('href').substring(1);
      scrollToSection(target);
      closeMobileMenu();
    });
  });
  
  // Product filters - FIXED
  setupProductFilters();
  
  // Contact form
  const contactForm = document.getElementById('contactForm');
  if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
      handleFormSubmit(e);
    });
    
    // Real-time validation
    const inputs = contactForm.querySelectorAll('.form-control');
    inputs.forEach(input => {
      input.addEventListener('blur', () => validateField(input));
      input.addEventListener('input', () => clearFieldError(input));
    });
  }
  
  console.log('Enhanced event listeners setup completed');
}

// FIXED - Setup Quote Buttons
function setupQuoteButtons() {
  // Use a more specific approach to find quote buttons
  const quoteButtons = document.querySelectorAll('.quote-btn');
  console.log('Found quote buttons:', quoteButtons.length);
  
  quoteButtons.forEach((btn, index) => {
    // Remove any existing event listeners
    btn.removeAttribute('onclick');
    
    btn.addEventListener('click', function(e) {
      e.preventDefault();
      e.stopPropagation();
      console.log(`Quote button ${index} clicked`);
      scrollToSection('contacto');
    });
  });
  
  // Also handle the "Ver Productos" button
  const viewProductsBtn = document.querySelector('.btn--secondary');
  if (viewProductsBtn) {
    viewProductsBtn.addEventListener('click', function(e) {
      e.preventDefault();
      scrollToSection('productos');
    });
  }
}

// FIXED - Setup Product Filters
function setupProductFilters() {
  const filterButtons = document.querySelectorAll('.filter__btn');
  console.log('Found filter buttons:', filterButtons.length);
  
  filterButtons.forEach((btn, index) => {
    btn.addEventListener('click', function(e) {
      e.preventDefault();
      e.stopPropagation();
      
      const filter = this.dataset.filter;
      console.log(`Filter clicked: ${filter} (Button index: ${index})`);
      
      // Update active filter
      setActiveFilter(this);
      
      // Apply filter
      filterProducts(filter);
      
      // Update current filter
      currentFilter = filter;
    });
  });
}

// Handle scroll events
function handleScroll() {
  const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  
  // Header background on scroll
  const header = document.getElementById('header');
  if (header) {
    if (scrollTop > 100) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  }
  
  // Scroll to top button visibility
  const scrollToTopBtn = document.getElementById('scrollToTop');
  if (scrollToTopBtn) {
    if (scrollTop > 500) {
      scrollToTopBtn.classList.add('visible');
    } else {
      scrollToTopBtn.classList.remove('visible');
    }
  }
  
  // Enhanced parallax effect for hero decorations
  const hero = document.querySelector('.hero');
  if (hero && scrollTop < window.innerHeight) {
    const circles = hero.querySelectorAll('.hero__circle');
    const lines = hero.querySelectorAll('.hero__line');
    
    circles.forEach((circle, index) => {
      const speed = 0.3 + (index * 0.1);
      const yPos = scrollTop * speed;
      circle.style.transform = `translateY(${yPos}px)`;
    });
    
    lines.forEach((line, index) => {
      const speed = 0.2 + (index * 0.15);
      const yPos = scrollTop * speed;
      line.style.transform = `translateY(${yPos}px)`;
    });
  }
}

// FIXED - Smooth scroll to section
function scrollToSection(sectionId) {
  console.log('Scrolling to section:', sectionId);
  
  const section = document.getElementById(sectionId);
  if (section) {
    const header = document.getElementById('header');
    const headerHeight = header ? header.offsetHeight : 80;
    const targetPosition = section.offsetTop - headerHeight - 20; // Added extra padding
    
    console.log('Target position calculated:', targetPosition);
    
    window.scrollTo({
      top: targetPosition,
      behavior: 'smooth'
    });
  } else {
    console.error('Section not found:', sectionId);
  }
}

// Mobile menu functions
function toggleMobileMenu(nav) {
  const mobileMenuToggle = document.getElementById('mobileMenuToggle');
  nav.classList.toggle('mobile-active');
  if (mobileMenuToggle) {
    mobileMenuToggle.classList.toggle('active');
  }
  document.body.classList.toggle('menu-open');
}

function closeMobileMenu() {
  const nav = document.getElementById('nav');
  const mobileMenuToggle = document.getElementById('mobileMenuToggle');
  
  if (nav) nav.classList.remove('mobile-active');
  if (mobileMenuToggle) mobileMenuToggle.classList.remove('active');
  document.body.classList.remove('menu-open');
}

// FIXED - Enhanced Products functionality with individual quote buttons
function renderProducts() {
  const productsGrid = document.getElementById('productsGrid');
  if (!productsGrid) {
    console.error('Products grid not found');
    return;
  }
  
  console.log('Rendering 14 products with individual quote buttons...');
  
  productsGrid.innerHTML = appData.products.map(product => `
    <div class="product__card fade-in" data-category="${product.category}">
      <div class="product__image">
        <div class="product__placeholder" style="color: var(--blue-primary);">
          ${productIcons[product.icon] || productIcons.panel}
        </div>
      </div>
      <div class="product__content">
        <h3 class="product__name">${product.name}</h3>
        <div class="product__price">${product.price}</div>
        <p class="product__description">${product.description}</p>
        <button class="btn btn--primary product-quote-btn" data-product="${product.name}">
          Solicitar Cotización
        </button>
      </div>
    </div>
  `).join('');
  
  // Setup individual product quote buttons
  setupProductQuoteButtons();
  
  console.log('14 products rendered successfully with quote buttons');
  updateProductCount('todos', appData.products.length);
}

// Setup individual product quote buttons
function setupProductQuoteButtons() {
  const productQuoteButtons = document.querySelectorAll('.product-quote-btn');
  console.log('Setting up product quote buttons:', productQuoteButtons.length);
  
  productQuoteButtons.forEach(btn => {
    btn.addEventListener('click', function(e) {
      e.preventDefault();
      e.stopPropagation();
      
      const productName = this.dataset.product;
      console.log('Product quote button clicked for:', productName);
      
      // Pre-fill the contact form with product information
      const messageField = document.getElementById('mensaje');
      if (messageField) {
        const currentMessage = messageField.value;
        const productMessage = `Me interesa recibir información sobre: ${productName}`;
        
        if (currentMessage && !currentMessage.includes(productName)) {
          messageField.value = `${currentMessage}\n\n${productMessage}`;
        } else if (!currentMessage) {
          messageField.value = productMessage;
        }
      }
      
      // Scroll to contact section
      scrollToSection('contacto');
      
      // Show notification
      showNotification(`Información agregada para: ${productName}`, 'info');
    });
  });
}

// FIXED - Filter functionality
function setActiveFilter(activeBtn) {
  const filterButtons = document.querySelectorAll('.filter__btn');
  filterButtons.forEach(btn => btn.classList.remove('active'));
  activeBtn.classList.add('active');
  console.log('Active filter set to:', activeBtn.dataset.filter);
}

// FIXED - Product filtering with proper animations
function filterProducts(filter) {
  console.log('Filtering products by:', filter);
  
  const productCards = document.querySelectorAll('.product__card');
  let visibleCount = 0;
  let animationDelay = 0;
  
  console.log('Total product cards found:', productCards.length);
  
  // First hide all cards
  productCards.forEach(card => {
    card.style.display = 'none';
    card.classList.add('hidden');
    card.classList.remove('visible');
  });
  
  // Then show matching cards with animation
  productCards.forEach((card, index) => {
    const category = card.dataset.category;
    const shouldShow = filter === 'todos' || category === filter;
    
    console.log(`Card ${index}: category="${category}", filter="${filter}", shouldShow=${shouldShow}`);
    
    if (shouldShow) {
      card.style.display = 'block';
      card.classList.remove('hidden');
      
      // Staggered animation
      setTimeout(() => {
        card.classList.add('visible');
      }, animationDelay);
      
      animationDelay += 100;
      visibleCount++;
    }
  });
  
  console.log(`Filter "${filter}" applied. Visible products: ${visibleCount}`);
  updateProductCount(filter, visibleCount);
  
  // Log category breakdown for debugging
  const categoryBreakdown = {
    paneles: productCards.length && [...productCards].filter(card => card.dataset.category === 'paneles').length,
    kits: productCards.length && [...productCards].filter(card => card.dataset.category === 'kits').length,
    baterias: productCards.length && [...productCards].filter(card => card.dataset.category === 'baterias').length,
    accesorios: productCards.length && [...productCards].filter(card => card.dataset.category === 'accesorios').length
  };
  
  console.log('Product breakdown by category:', categoryBreakdown);
}

function updateProductCount(filter, count) {
  console.log(`${filter}: ${count} productos`);
  
  // Optional: Add visual feedback
  const filterBtn = document.querySelector(`[data-filter="${filter}"]`);
  if (filterBtn && count > 0) {
    filterBtn.style.position = 'relative';
  }
}

// Enhanced Form validation and submission
function handleFormSubmit(e) {
  e.preventDefault();
  console.log('Form submission started');
  
  const isValid = validateForm();
  
  if (isValid) {
    const formData = new FormData(e.target);
    submitForm(formData, e.target);
  }
}

function validateForm() {
  const fields = ['nombre', 'email', 'telefono', 'mensaje'];
  let isValid = true;
  
  console.log('Validating form fields...');
  
  fields.forEach(fieldName => {
    const field = document.getElementById(fieldName);
    if (!validateField(field)) {
      isValid = false;
    }
  });
  
  return isValid;
}

function validateField(field) {
  if (!field) return false;
  
  const value = field.value.trim();
  const fieldName = field.name;
  const errorElement = document.getElementById(`${fieldName}Error`);
  
  let isValid = true;
  let errorMessage = '';
  
  // Required field validation
  if (!value) {
    isValid = false;
    errorMessage = 'Este campo es requerido';
  } else {
    // Specific validation based on field type
    switch (fieldName) {
      case 'email':
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(value)) {
          isValid = false;
          errorMessage = 'Por favor ingresa un email válido';
        }
        break;
      case 'telefono':
        const phoneRegex = /^[+]?[\d\s\-\(\)]+$/;
        if (!phoneRegex.test(value) || value.length < 8) {
          isValid = false;
          errorMessage = 'Por favor ingresa un teléfono válido';
        }
        break;
      case 'nombre':
        if (value.length < 2) {
          isValid = false;
          errorMessage = 'El nombre debe tener al menos 2 caracteres';
        }
        break;
      case 'mensaje':
        if (value.length < 10) {
          isValid = false;
          errorMessage = 'El mensaje debe tener al menos 10 caracteres';
        }
        break;
    }
  }
  
  // Display error message
  if (errorElement) {
    errorElement.textContent = errorMessage;
  }
  
  // Add/remove error styling
  field.classList.toggle('error', !isValid);
  
  return isValid;
}

function clearFieldError(field) {
  const fieldName = field.name;
  const errorElement = document.getElementById(`${fieldName}Error`);
  
  if (errorElement) {
    errorElement.textContent = '';
  }
  field.classList.remove('error');
}

function submitForm(formData, form) {
  console.log('Submitting form...');
  
  // Show loading state
  const submitBtn = form.querySelector('button[type="submit"]');
  const originalText = submitBtn.textContent;
  submitBtn.textContent = 'Enviando...';
  submitBtn.disabled = true;
  
  // Simulate API call
  setTimeout(() => {
    // Show success message
    showNotification('¡Mensaje enviado exitosamente! Te contactaremos pronto.', 'success');
    
    // Reset form
    form.reset();
    
    // Reset button
    submitBtn.textContent = originalText;
    submitBtn.disabled = false;
    
    // Clear any error messages
    const errorElements = form.querySelectorAll('.error-message');
    errorElements.forEach(el => el.textContent = '');
    
    const formControls = form.querySelectorAll('.form-control');
    formControls.forEach(el => el.classList.remove('error'));
    
    console.log('Form submitted successfully');
  }, 2000);
}

// Enhanced Notification system
function showNotification(message, type = 'info') {
  console.log('Showing notification:', message, type);
  
  // Remove existing notifications
  const existingNotifications = document.querySelectorAll('.notification');
  existingNotifications.forEach(n => n.remove());
  
  // Create notification element
  const notification = document.createElement('div');
  notification.className = `notification notification--${type}`;
  
  // Choose colors based on type
  let bgColor, textColor;
  switch(type) {
    case 'success':
      bgColor = '#10B981';
      textColor = '#FFFFFF';
      break;
    case 'error':
      bgColor = '#EF4444';
      textColor = '#FFFFFF';
      break;
    case 'warning':
      bgColor = '#F59E0B';
      textColor = '#FFFFFF';
      break;
    default:
      bgColor = '#3B82F6';
      textColor = '#FFFFFF';
  }
  
  notification.innerHTML = `
    <div class="notification__content">
      <span class="notification__message">${message}</span>
      <button class="notification__close" type="button">&times;</button>
    </div>
  `;
  
  // Add styles
  notification.style.cssText = `
    position: fixed;
    top: 100px;
    right: 20px;
    background: ${bgColor};
    color: ${textColor};
    padding: 1rem 1.5rem;
    border-radius: 12px;
    box-shadow: 0 8px 25px rgba(0,0,0,0.15);
    z-index: 10000;
    transform: translateX(400px);
    transition: transform 0.3s ease;
    max-width: 350px;
    font-family: 'Roboto', sans-serif;
    font-weight: 500;
  `;
  
  // Add to DOM
  document.body.appendChild(notification);
  
  // Animate in
  setTimeout(() => {
    notification.style.transform = 'translateX(0)';
  }, 100);
  
  // Close button functionality
  const closeBtn = notification.querySelector('.notification__close');
  closeBtn.style.cssText = `
    background: none;
    border: none;
    color: ${textColor};
    font-size: 1.2rem;
    cursor: pointer;
    padding: 0;
    margin-left: 1rem;
    line-height: 1;
  `;
  closeBtn.addEventListener('click', () => removeNotification(notification));
  
  // Auto remove after 5 seconds
  setTimeout(() => removeNotification(notification), 5000);
}

function removeNotification(notification) {
  if (notification && notification.parentNode) {
    notification.style.transform = 'translateX(400px)';
    setTimeout(() => {
      if (notification.parentNode) {
        notification.parentNode.removeChild(notification);
      }
    }, 300);
  }
}

// Enhanced Animation system using Intersection Observer
function initializeAnimations() {
  console.log('Initializing enhanced animations...');
  
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);
  
  // Observe elements with animation classes
  const animationElements = document.querySelectorAll('.fade-in, .slide-in-left, .slide-in-right');
  
  animationElements.forEach(el => {
    observer.observe(el);
  });
  
  // Add staggered animation for cards
  const cards = document.querySelectorAll('.product__card, .service__card, .benefit__card, .project__card');
  cards.forEach((card, index) => {
    card.style.animationDelay = `${index * 0.1}s`;
    observer.observe(card);
  });
  
  console.log(`Observing ${animationElements.length} animation elements`);
}

// Initialize enhanced scroll effects
function initializeScrollEffects() {
  console.log('Initializing enhanced scroll effects...');
  
  // Re-setup quote buttons after DOM changes
  setTimeout(() => {
    setupQuoteButtons();
  }, 1000);
}

// Enhanced accessibility features
document.addEventListener('keydown', function(e) {
  // ESC key to close mobile menu and notifications
  if (e.key === 'Escape') {
    closeMobileMenu();
    
    // Close notifications
    const notifications = document.querySelectorAll('.notification');
    notifications.forEach(removeNotification);
  }
  
  // Enter key on buttons
  if (e.key === 'Enter' && e.target.classList.contains('btn')) {
    e.target.click();
  }
  
  // Arrow keys for product navigation
  if (e.key === 'ArrowLeft' || e.key === 'ArrowRight') {
    const activeFilter = document.querySelector('.filter__btn.active');
    if (activeFilter) {
      const filterButtons = Array.from(document.querySelectorAll('.filter__btn'));
      const currentIndex = filterButtons.indexOf(activeFilter);
      let nextIndex;
      
      if (e.key === 'ArrowRight') {
        nextIndex = (currentIndex + 1) % filterButtons.length;
      } else {
        nextIndex = currentIndex === 0 ? filterButtons.length - 1 : currentIndex - 1;
      }
      
      filterButtons[nextIndex].click();
      filterButtons[nextIndex].focus();
    }
  }
});

// Performance monitoring
window.addEventListener('load', function() {
  const loadTime = performance.now();
  console.log(`Enhanced SolarTech Solutions loaded in ${loadTime.toFixed(2)}ms`);
  
  // Log product statistics
  console.log('Product categories distribution:', {
    total: appData.products.length,
    paneles: appData.products.filter(p => p.category === 'paneles').length,
    kits: appData.products.filter(p => p.category === 'kits').length,
    baterias: appData.products.filter(p => p.category === 'baterias').length,
    accesorios: appData.products.filter(p => p.category === 'accesorios').length
  });
  
  // Re-setup event listeners after full load
  setTimeout(() => {
    setupQuoteButtons();
    setupProductFilters();
  }, 500);
});

// Error handling
window.addEventListener('error', function(e) {
  console.error('JavaScript Error:', e.error);
  showNotification('Ha ocurrido un error. Por favor, recarga la página.', 'error');
});

window.addEventListener('unhandledrejection', function(e) {
  console.error('Unhandled Promise Rejection:', e.reason);
});

// Export functions for global access
window.SolarTech = {
  scrollToSection,
  showNotification,
  filterProducts,
  initializeApp,
  renderProducts,
  productCount: appData.products.length,
  currentFilter
};

// Enhanced backup initialization
setTimeout(() => {
  if (!isInitialized) {
    console.log('Enhanced backup initialization triggered');
    initializeApp();
  }
}, 2000);

// Additional initialization check
window.addEventListener('DOMContentLoaded', function() {
  setTimeout(() => {
    // Ensure quote buttons are working
    const quoteButtons = document.querySelectorAll('.quote-btn');
    if (quoteButtons.length === 0) {
      console.warn('No quote buttons found, retrying setup...');
      setTimeout(setupQuoteButtons, 1000);
    }
    
    // Ensure filters are working
    const filterButtons = document.querySelectorAll('.filter__btn');
    if (filterButtons.length === 0) {
      console.warn('No filter buttons found, retrying setup...');
      setTimeout(setupProductFilters, 1000);
    }
  }, 1500);
});