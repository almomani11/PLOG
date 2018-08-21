function init() {
    Tabletop.init({
      key: 'https://docs.google.com/spreadsheets/d/1padEJ7Fz-Wj51Ue1wosIFi61N49mCMLONa9t96M37LU/pubhtml',
      callback: function (data, tabletop) {
        console.log(data)
      },
      simpleSheet: true
    })
   }
   window.addEventListener('DOMContentLoaded', init)