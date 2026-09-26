(() => {
  const CART_KEY = "dalaDamiCart";
  const WHATSAPP_NUMBER = "77770664866";
  const canonicalUrl = document.querySelector('link[rel="canonical"]')?.href || "";
  const productId = document.body.dataset.productId;
  const product = Array.isArray(window.PRODUCTS)
    ? window.PRODUCTS.find((item) => item.id === productId || canonicalUrl.endsWith(item.seoPath))
    : null;
  if (!product) return;

  let quantity = 1;
  let cart = loadCart();
  const productMap = new Map(window.PRODUCTS.map((item) => [item.id, item]));
  const actions = document.querySelector(".product-page__actions");
  const headerInner = document.querySelector(".header__inner");
  const details = document.querySelector(".product-page__details");

  if (headerInner) {
    headerInner.insertAdjacentHTML("beforeend", `
      <div class="product-header-actions">
        <button class="page-cart-button" type="button" data-page-cart-toggle>
          Корзина <span data-cart-count>0</span>
        </button>
      </div>
    `);
  }

  if (actions) {
    actions.innerHTML = `
      <div class="product-purchase">
        <div class="product-purchase__topline"><span>Добавьте товар в корзину</span><strong>Цена по запросу</strong></div>
        <div class="product-purchase__controls">
          <div class="page-quantity" aria-label="Количество товара">
            <button type="button" data-page-quantity="-1" aria-label="Уменьшить количество">−</button>
            <output data-page-quantity-value>1</output>
            <button type="button" data-page-quantity="1" aria-label="Увеличить количество">+</button>
          </div>
          <button class="btn btn--accent product-purchase__add" type="button" data-page-add>Добавить в корзину</button>
        </div>
        <button class="product-purchase__checkout" type="button" data-page-buy>Оформить заказ</button>
      </div>
    `;
  }

  if (details) {
    const recommendations = window.PRODUCTS.filter((item) => item.id !== product.id).slice(0, 3);
    details.insertAdjacentHTML("afterend", `
      <section class="product-recommendations" aria-labelledby="other-products-title">
        <div class="product-recommendations__head"><p class="product-page__eyebrow">Каталог DALA DAMI</p><h2 id="other-products-title">Попробуйте также</h2></div>
        <div class="product-recommendations__grid">
          ${recommendations.map((item) => `
            <article class="recommendation-card">
              <a href="${item.seoPath}"><img src="../../${item.image}" alt="${escapeHTML(item.name.ru)}" loading="lazy"></a>
              <div><h3><a href="${item.seoPath}">${escapeHTML(item.name.ru)}</a></h3><p>${escapeHTML(item.shortDescription.ru)}</p></div>
              <div class="recommendation-card__actions"><a href="${item.seoPath}">Подробнее</a><button type="button" data-page-add-product="${item.id}">В корзину</button></div>
            </article>
          `).join("")}
        </div>
      </section>
    `);
  }

  document.body.insertAdjacentHTML("beforeend", `
    <button class="page-mobile-cart" type="button" data-page-cart-toggle>Корзина <span data-cart-count>0</span></button>
    <aside class="page-cart" aria-hidden="true" data-page-cart>
      <button class="page-cart__backdrop" type="button" data-page-cart-close aria-label="Закрыть корзину"></button>
      <div class="page-cart__panel" role="dialog" aria-modal="true" aria-label="Ваша корзина">
        <div class="page-cart__head"><div><p class="product-page__eyebrow">DALA DAMI</p><h2>Ваша корзина</h2></div><button type="button" data-page-cart-close aria-label="Закрыть корзину">×</button></div>
        <div class="page-cart__items" data-page-cart-items></div>
        <div class="page-cart__footer"><p>Итого <strong data-page-cart-total>0 ₸</strong></p><button class="btn btn--accent" type="button" data-page-checkout>Оформить заказ</button></div>
      </div>
    </aside>
    <div class="page-order" aria-hidden="true" data-page-order>
      <button class="page-order__backdrop" type="button" data-page-order-close aria-label="Закрыть оформление заказа"></button>
      <section class="page-order__panel" role="dialog" aria-modal="true" aria-labelledby="page-order-title">
        <button class="page-order__close" type="button" data-page-order-close aria-label="Закрыть">×</button>
        <p class="product-page__eyebrow">Оформление заказа</p><h2 id="page-order-title">Оставьте заявку</h2><p class="page-order__intro">Мы получим заказ и свяжемся, чтобы уточнить цену, доставку и оплату.</p>
        <form class="page-order__form" data-page-order-form>
          <input type="hidden" name="order_items" data-page-order-items>
          <input type="hidden" name="order_total" data-page-order-total>
          <input type="hidden" name="language" value="ru">
          <div class="page-order__grid"><label>Ваше имя<input name="name" required autocomplete="name"></label><label>Номер телефона<input name="phone" type="tel" required autocomplete="tel" placeholder="+7 (___) ___-__-__"></label></div>
          <div class="page-order__grid"><label>Компания <span>необязательно</span><input name="company" autocomplete="organization"></label><label>Нужна доставка<select name="delivery" required><option value="yes">Да</option><option value="no">Нет</option></select></label></div>
          <label>Комментарий <span>необязательно</span><textarea name="comment" rows="3" placeholder="Уточнения по заказу и доставке"></textarea></label>
          <label>Ваш заказ<textarea data-page-order-preview rows="4" readonly></textarea></label>
          <button class="btn btn--accent" type="submit">Отправить заказ</button>
          <a class="page-order__whatsapp" data-page-whatsapp target="_blank" rel="noopener">Или продолжить в WhatsApp</a>
          <p class="page-order__message" data-page-order-message aria-live="polite"></p>
        </form>
      </section>
    </div>
  `);

  document.addEventListener("click", (event) => {
    const target = event.target.closest("button, a");
    if (!target) return;
    if (target.matches("[data-page-quantity]")) { quantity = Math.max(1, quantity + Number(target.dataset.pageQuantity)); renderQuantity(); }
    if (target.matches("[data-page-add]")) { add(product.id, quantity); openCart(); }
    if (target.matches("[data-page-buy]")) { add(product.id, quantity); openOrder(); }
    if (target.matches("[data-page-add-product]")) { add(target.dataset.pageAddProduct, 1); openCart(); }
    if (target.matches("[data-page-cart-toggle]")) openCart();
    if (target.matches("[data-page-cart-close]")) closeCart();
    if (target.matches("[data-page-checkout]")) openOrder();
    if (target.matches("[data-page-order-close]")) closeOrder();
    if (target.matches("[data-page-cart-change]")) { change(target.dataset.pageCartChange, Number(target.dataset.delta)); }
    if (target.matches("[data-page-cart-remove]")) { remove(target.dataset.pageCartRemove); }
  });

  document.querySelector("[data-page-order-form]").addEventListener("submit", async (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    const message = document.querySelector("[data-page-order-message]");
    if (!entries().length) { message.textContent = "Добавьте хотя бы один товар в корзину."; message.className = "page-order__message is-error"; return; }
    const phone = form.elements.phone.value.trim();
    if (phone.replace(/\D/g, "").length < 10) { message.textContent = "Введите корректный номер телефона."; message.className = "page-order__message is-error"; return; }
    message.textContent = "Отправляем заказ…"; message.className = "page-order__message";
    try {
      const response = await fetch("../../order.php", { method: "POST", body: new FormData(form) });
      const payload = await response.json();
      if (!response.ok || !payload.success) throw new Error(payload.message || "Не удалось отправить заказ.");
      message.textContent = "Заказ отправлен. Мы скоро с вами свяжемся."; message.className = "page-order__message is-success";
    } catch (error) {
      message.textContent = error.message || "Не удалось отправить заказ. Попробуйте WhatsApp."; message.className = "page-order__message is-error";
    }
  });

  function entries() { return Object.entries(cart).map(([id, count]) => ({ product: productMap.get(id), count })).filter((item) => item.product && item.count > 0); }
  function add(id, count) { cart[id] = (cart[id] || 0) + count; save(); update(); }
  function change(id, delta) { const next = (cart[id] || 0) + delta; if (next > 0) cart[id] = next; else delete cart[id]; save(); update(); }
  function remove(id) { delete cart[id]; save(); update(); }
  function loadCart() { try { return JSON.parse(localStorage.getItem(CART_KEY)) || {}; } catch { return {}; } }
  function save() { localStorage.setItem(CART_KEY, JSON.stringify(cart)); }
  function renderQuantity() { document.querySelector("[data-page-quantity-value]").textContent = quantity; }
  function summary() { const current = entries(); return current.length ? current.map(({ product: item, count }) => `${item.name.ru} — ${count} шт. × ${item.price ? `${item.price} ₸` : "цена по запросу"}`).join("\n") : "Корзина пуста"; }
  function update() {
    const current = entries(); const count = current.reduce((total, item) => total + item.count, 0);
    document.querySelectorAll("[data-cart-count]").forEach((node) => { node.textContent = count; });
    document.querySelector("[data-page-cart-items]").innerHTML = current.length ? current.map(({ product: item, count: itemCount }) => `
      <article class="page-cart-item"><img src="../../${item.image}" alt="${escapeHTML(item.name.ru)}"><div><h3>${escapeHTML(item.name.ru)}</h3><p>${escapeHTML(item.volume.ru)} · Цена по запросу</p><div class="page-cart-item__controls"><button type="button" data-page-cart-change="${item.id}" data-delta="-1">−</button><span>${itemCount}</span><button type="button" data-page-cart-change="${item.id}" data-delta="1">+</button><button type="button" data-page-cart-remove="${item.id}">Удалить</button></div></div></article>`).join("") : `<div class="page-cart__empty"><p>Корзина пока пуста.</p><a href="../../#catalog">Перейти в каталог</a></div>`;
    const total = current.some(({ product: item }) => item.price === null) ? "Уточним при заказе" : `${current.reduce((sum, { product: item, count: itemCount }) => sum + item.price * itemCount, 0)} ₸`;
    document.querySelector("[data-page-cart-total]").textContent = total;
    document.querySelector("[data-page-order-items]").value = summary();
    document.querySelector("[data-page-order-total]").value = total;
    document.querySelector("[data-page-order-preview]").value = summary();
    const text = encodeURIComponent(`Здравствуйте! Хочу оформить заказ DALA DAMI.\n\n${summary()}`);
    document.querySelector("[data-page-whatsapp]").href = `https://wa.me/${WHATSAPP_NUMBER}?text=${text}`;
  }
  function openCart() { document.querySelector("[data-page-cart]").classList.add("is-open"); document.querySelector("[data-page-cart]").setAttribute("aria-hidden", "false"); }
  function closeCart() { document.querySelector("[data-page-cart]").classList.remove("is-open"); document.querySelector("[data-page-cart]").setAttribute("aria-hidden", "true"); }
  function openOrder() { closeCart(); update(); document.querySelector("[data-page-order]").classList.add("is-open"); document.querySelector("[data-page-order]").setAttribute("aria-hidden", "false"); }
  function closeOrder() { document.querySelector("[data-page-order]").classList.remove("is-open"); document.querySelector("[data-page-order]").setAttribute("aria-hidden", "true"); }
  function escapeHTML(value) { return String(value).replace(/[&<>'"]/g, (char) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", "'": "&#39;", '"': "&quot;" }[char])); }
  renderQuantity(); update();
})();
