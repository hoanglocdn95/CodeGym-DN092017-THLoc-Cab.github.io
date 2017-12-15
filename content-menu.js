var menuList = ["TRUYỆN NỔI BẬT","TRUYỆN MỚI ĐĂNG", "TRUYỆN HOÀN THÀNH","TRUYỆN DỀ CỬ"];

$(document).ready(function() {
	var $i=0;
	$("#menu-btn-left").click(function() {
		if ($i>0) {
			$i--;
			$("#menu-title").html(menuList[$i]);
		};
	});
	$("#menu-btn-right").click(function() {
		if ($i<3) {
			$i++;
			$("#menu-title").html(menuList[$i]);
		};
	});

});

