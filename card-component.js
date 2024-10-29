class CardComponent extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });

        const template = document.createElement('template');
        template.innerHTML = `
            <style>
                .card {
                    background-color: #1c1c1c;
                    border-radius: 8px;
                    padding: 16px;
                    margin-bottom: 20px;
                    color: white;
                    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.5);
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                }
                .header {
                    font-size: 1.5em;
                    margin-bottom: 12px;
                    color: #ff8c00; 
                }
                .content {
                    font-size: 1em;
                    margin-bottom: 12px;
                }
                .director {
                    font-size: 0.9em;
                    margin-bottom: 8px;
                    color: #ffcc00; 
                }
                .other-info {
                    font-size: 0.9em;
                    margin-bottom: 12px;
                    color: #b3b3b3; 
                }
                .description-header {
                    font-size: 1.1em;
                    margin-bottom: 4px;
                    color: #ff8c00; 
                    text-align: center;
                }
                .description {
                    font-size: 0.9em;
                    color: #b3b3b3;
                    margin-top: 10px;
                    text-align: center;
                }
                .image img {
                    max-width: 100%;
                    height: auto;
                    border-radius: 8px;
                    margin-top: 10px;
                }
            </style>
            <div class="card">
                <div class="header">
                    <slot name="header">Default Header</slot>
                </div>
                <div class="director">
                    <slot name="director">Default Director</slot>
                </div>
                <div class="other-info">
                    <slot name="other-info">Other Info</slot>
                </div>
                <div class="content">
                    <slot name="content">Default Content</slot>
                </div>
                <div class="image">
                    <slot name="image"></slot>
                </div>
                <div class="description-header">
                    Краткая информация
                </div>
                <div class="description">
                    <slot name="description">Default Description</slot>
                </div>
            </div>
        `;

        this.shadowRoot.appendChild(template.content.cloneNode(true));
    }
}

customElements.define('card-component', CardComponent);
