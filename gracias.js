!function(i){i("body").on("click","a.app_thanks_ajax",function(a){var d=i(this);i(a).stop();var e=d.clone();return d.attr("disabled","disabled"),i.ajax({async:!0,url:d.attr("href"),type:"POST",dataType:"json",data:{action:d.data("action"),pid:d.data("pid"),fid:d.data("fid"),to_id:d.data("to_id"),from_id:d.data("from_id")},success:function(a){if(a&&a.result){if(a&&a.update)for(var t in a.update)a.update.hasOwnProperty(t)&&i("."+t).replaceWith(a.update[t])}else d.replaceWith(e)},error:function(a,t){d.replaceWith(e)}}),!1})}(jQuery);