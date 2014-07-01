(function (bke) {
  bke.liquorlist = {
    controller: function () {
      var query = m.prop("");
      var liquors = m.prop([]);

      var doQuery = function (term) {
        query(term);
        m.request({
          method: "GET",
          url: "/search/liquor/"+ query()
        }).then(liquors);
      };
      doQuery("");
      return {
        result: liquors,
        query: query,
        doQuery: doQuery
      };
    },
    view: bke.views.search(bke.views.liquor)
  };
})(window.bke = window.bke || {});
