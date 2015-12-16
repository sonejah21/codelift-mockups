function Tabs(el) {
  this.component = $(el);
  this.tabsLinks = this.component.find(".tabs-link");
  this.tabsSections = $(".tabs-section");
  this._init();
}

Tabs.prototype._init = function() {
  var tabs = this;

  $(this.tabsLinks).click(function(e){
    e.preventDefault();
    tabs._setActiveSection(this.hash);
    tabs._setActiveLink(this);
  });
}

Tabs.prototype._setActiveLink = function(link) {
  this.tabsLinks.removeClass("active");
  $(link).addClass("active");
}

Tabs.prototype._setActiveSection = function(sectionId) {
  this.tabsSections.removeClass("active");
  this.tabsSections.filter(sectionId).addClass("active");
}

window.Tabs = Tabs;
