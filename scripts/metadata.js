define(function(){
    return {
        pageGroups: [{"id":"88e3330d-b2c7-8154-36ad-d6a3995ac0bb","name":"Default group","pages":[{"id":"817b4e94-dbf3-aa99-acbf-050b69e4cac0","name":"Page 1"}]}],
        downloadLink: "//services.ninjamock.com/html/htmlExport/download?shareCode=6HBC7Wx&projectName=Untitled project",
        startupPageId: 0,

        forEachPage: function(func, thisArg){
        	for (var i = 0, l = this.pageGroups.length; i < l; ++i){
                var group = this.pageGroups[i];
                for (var j = 0, k = group.pages.length; j < k; ++j){
                    var page = group.pages[j];
                    if (func.call(thisArg, page) === false){
                    	return;
                    }
                }
            }
        },
        findPageById: function(pageId){
        	var result;
        	this.forEachPage(function(page){
        		if (page.id === pageId){
        			result = page;
        			return false;
        		}
        	});
        	return result;
        }
    }
});
