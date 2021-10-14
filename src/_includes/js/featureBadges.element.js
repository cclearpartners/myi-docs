/**
 * @attr {Boolean} package
 * @attr {Boolean} zip
 * @attr {Boolean} dataload
 */
class FeatureBadges extends HTMLElement {
  connectedCallback() {
    this.classList.add('flex', 'flex-initial', 'gap-1', 'text-white', 'text-sm');
    if (this.hasAttribute('package')) {
      this.insertAdjacentHTML('beforeend', '<span class="bg-blue-500 rounded p-1" title="This feature requires a new package to be installed in Salesforce">Salesforce <span class="text-xs">&#9432;</span></span>');
    }
    if (this.hasAttribute('zip')) {
      this.insertAdjacentHTML('beforeend', '<span class="bg-yellow-500 rounded p-1" title="This feature requires a new ZIP file to be attached to an HTML Report">ZIP <span class="text-xs">&#9432;</span></span>');
    }
    if (this.hasAttribute('dataload')) {
      this.insertAdjacentHTML('beforeend', '<span class="bg-gray-600 rounded p-1" title="This feature requires CSV files to be dataloaded">Dataload <span class="text-xs">&#9432;</span></span>');
    }
  }
}

customElements.define('feature-badges', FeatureBadges);