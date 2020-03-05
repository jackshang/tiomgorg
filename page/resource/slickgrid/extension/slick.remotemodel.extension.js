(function ($) {
  /***
   * A sample AJAX data store implementation.
   * Right now, it's hooked up to load all Apple-related Digg stories, but can
   * easily be extended to support and JSONP-compatible backend that accepts paging parameters.
   */
  function RemoteModel(url, data, uuid) {
    var _data = new Array();
    var _totalPage = -1;
    var _currentPageNO = 1;
    var _recordNOPerPage = 10;
    var url = url;
    
    var h_request = null;
    var req = null; // ajax request

    // events
    var startDataLoading = new Slick.Event();
    var onDataLoading = new Slick.Event();
    var onDataLoaded = new Slick.Event();
    var endDataLoading = new Slick.Event();


    function init() {
    }




    function clear() {
      for (var key in data) {
        delete data[key];
      }
      _data.length = 0;
    }


    function ensureData() {
      if (req) {
        req.abort();
      }

      if (_currentPageNO > _totalPage && _totalPage != -1 && _currentPageNO != 1) {
        endDataLoading.notify({currentPageNO: _currentPageNO});
        return;
      }
      
      if (_currentPageNO == 1 && _totalPage == -1){
      	startDataLoading.notify({currentPageNO: _currentPageNO});
      } else {
      	onDataLoading.notify({currentPageNO: _currentPageNO});
      }



      var url_new = url + "?page="+_currentPageNO+"&number=" + _recordNOPerPage;


        req = $.jsonp({
          url: url_new,
          data: data,
          callbackParameter: "callback",
          cache: true, // Digg doesn't accept the autogenerated cachebuster param
          success: onSuccess,
          error: function () {
            onError(_currentPageNO);
          }
        });
    }


    function onError(page) {
      alert("error loading pages " + page);
    }

    function onSuccess(resp) {
      if(totalPage = -1){
      	total = parseInt(resp.total);
      	_totalPage = Math.ceil(total / _recordNOPerPage);
      }
      rows = resp.rows;
      for(var index in resp.rows){
      	rows[index]["id"] = _data.length + 1;
      	_data.push(rows[index]);
      }
      _currentPageNO = _currentPageNO + 1;
      onDataLoaded.notify({currentPageNO: _currentPageNO});
    }


    function reloadData() {
      _data = [];
      ensureData();
    }

    function setSort(column, dir) {
      sortcol = column;
      sortdir = dir;
      clear();
    }

    function setSearch(str) {
      searchstr = str;
      clear();
    }

    init();

    return {
      // properties
      "data": _data,
      "recordNOPerPage": _recordNOPerPage,

      // methods
      "clear": clear,
      "ensureData": ensureData,
      "reloadData": reloadData,

      // events
      "startDataLoading": startDataLoading,
      "onDataLoading": onDataLoading,
      "onDataLoaded": onDataLoaded,
      "endDataLoading": endDataLoading
    };
  }

  // Slick.Data.RemoteModel
  $.extend(true, window, { Slick: { Data: { RemoteModel: RemoteModel }}});
})(jQuery);