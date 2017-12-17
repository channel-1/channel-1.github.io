
var maxHdrAdv = parseInt($("#headbann div.hdr_adv").length);
var curHdrAdv = 1;
var methodHdrAdv = "slide";
var timHdrAdv = 10000;
var speedHdrAdv = 1000;
$("#headbann div.hdr_adv:nth-child(1)").show(methodHdrAdv, speedHdrAdv);
function switchHdrBan() {
	$("#headbann div.hdr_adv:nth-child("+curHdrAdv+")").hide(
		methodHdrAdv,
		speedHdrAdv,
		function() {
			curHdrAdv++;
			if (curHdrAdv > maxHdrAdv ) {
				curHdrAdv = 1;
			}
			$("#headbann div.hdr_adv:nth-child("+curHdrAdv+")").show(methodHdrAdv, speedHdrAdv);
		}
	);
}

if ($("#headbann div.hdr_adv").length > 0)
	setInterval("switchHdrBan()", timHdrAdv );



function count_messagesnew(id){ console.log('+++');
	$.ajax({
		url: '/widget/countmessagesnew',
		data: {id:id},
		success: function(data){ console.log('___'); console.log(data);
			$('.total_new_messages').html(data);
		}
	});
}
function count_friendsnew(id){
	$.ajax({
		url: '/widget/countfriendsnew',
		data: {id:id},
		success: function(data){ 
			$('.total_new_frends').html(data);
		}
	});
}
/*-----Прокрутка вверх в пагинации--------*/
var scrollTop = 0;
if($('#scrollTop').length != 0) scrollTop = $('#scrollTop').offset().top-200;
$(document).ready(function() {
    $('.list-view .pager li').click(function(){
       $('html, body').animate({scrollTop:scrollTop}, 600);
    });
});
$(document).bind("ajaxComplete",function(){
    $('.list-view .pager li').click(function(){
       $('html, body').animate({scrollTop:scrollTop}, 600);
    });
});

$(document).ready(function() {
    $('.scrol_top').click(function(){
	   $('html, body').animate({scrollTop:scrollTop}, 600);
	});
	$(window).scroll(function () {
		if ($(this).scrollTop() > $(window).height()+10){
			$('.scrol_top').fadeIn();
		} else {
			$('.scrol_top').fadeOut();
		}
	})
});
/*end-------------*/

/*-----JS Редирект--------*/
function redirect(lin){
    window.location.href=lin;
}
/*end-------------*/

/*-----Подстройка изображения в контейнере с классом .cover--------*/
$('.cover').each(function(i,elem) {
	if($('img.cm',this).length>0){
		if($('img.cm',this).height()>$('img.cm',this).width()){
			$('img.cm',this).css({'height':$(this).height()+'px'});
			$('img.cm',this).css({'width':'auto'});
		}else{
			$('img.cm',this).css({'height':$(this).width()+'px'});
			$('img.cm',this).css({'width':'auto'});
		}
	}
	$(this).css({'overflow':'hidden'});
});
$(document).bind("ajaxComplete",function(){
	$('.cover').each(function(i,elem) {
		if($('img.cm',this).height()>$('img.cm',this).width()){
			$('img.cm',this).css({'height':$(this).height()+'px'});
			$('img.cm',this).css({'width':'auto'});
		}else{
			$('img.cm',this).css({'height':$(this).width()+'px'});
			$('img.cm',this).css({'width':'auto'});
		}
		$(this).css({'overflow':'hidden'});
	});
});
/*end-------------*/

/*
Учет кликов по баннеру, показов
*/
function bannerclicks(id,url){
	$.ajax({
		url: '/widget/bannerclicks',
		data: {id:id},
		success: function(result){ 
			//window.location.href = url;
		}
	});
}
function bannershows(id){
	$.ajax({
		url: '/widget/bannershows',
		data: {id:id},
	});
}
$('.bnr_napensii').each(function(i,elem) {
	bnr_id = $(this).attr('id');
	bnr_id_split = bnr_id.split('bnr_napensii_id_');
	id = bnr_id_split[1];
	bannershows(id);
});
/*end-------------*/

/*-----Нестандартный checkBox--------*/
$('.chbox').each(function(i,elem) {
	id = $(elem).attr('id');
	if($('input[name='+id+']').val() == 1)
	$(elem).css({'background':'url(/tools/images/check.png) no-repeat center center'})
});	
$('.chbox').click(function(){
	id = $(this).attr('id');
	if($('input[name='+id+']').val() == 1){
		$(this).css({'background':'none'});
		$('input[name='+id+']').val(0);
	}else{
		$(this).css({'background':'url(/tools/images/check.png) no-repeat center center'});
		$('input[name='+id+']').val(1);
	}
});	
/*end-------------*/

/*-----UI Date--------*/
$.datepicker.regional['ru'] = { 
	closeText: 'Закрыть', 
	prevText: '&#x3c;Пред', 
	nextText: 'След&#x3e;', 
	currentText: 'Сегодня', 
	monthNames: ['Январь','Февраль','Март','Апрель','Май','Июнь', 
	'Июль','Август','Сентябрь','Октябрь','Ноябрь','Декабрь'], 
	monthNamesShort: ['Янв','Фев','Мар','Апр','Май','Июн', 
	'Июл','Авг','Сен','Окт','Ноя','Дек'], 
	dayNames: ['воскресенье','понедельник','вторник','среда','четверг','пятница','суббота'], 
	dayNamesShort: ['вск','пнд','втр','срд','чтв','птн','сбт'], 
	dayNamesMin: ['Вс','Пн','Вт','Ср','Чт','Пт','Сб'], 
	dateFormat: 'dd.mm.yy', 
	firstDay: 1, 
	isRTL: false 
}; 
$.datepicker.setDefaults($.datepicker.regional['ru']);
/*end-------------*/

/*-----АРХИВ--------*/
$(function(){
	$( "#datepicker2" ).datepicker({

    });
	$( "#datepicker3" ).datepicker({

    });
	$( "#datepicker1" ).datepicker({
        showOtherMonths: true,
	    altField: '#created_only',
        altFormat: 'dd.mm.yy',
        onSelect: function(dateText, inst) {
            $("#datepicker2").val("");
            $("#datepicker3").val("");
        },
        onLoad: function(dateText, inst) {
            $('.ui-icon-circle-triangle-w').html('<i class="fa fa-arrow-circle-o-right"></i>')
        }
    });
	
	$("#datepicker1").datepicker( "setDate" , $("#created_only_def").val());
	
});

/*end-------------*/

/*Header-------------*/
/*
function total_new_messages(){
	$.ajax({
		type: 'POST',
		url: '/widget/totalnewmessages',
		data: {},
		success: function(result){ 
			if(result!=''){
				$('#header .total_new_messages').text(result);
				
				if($('.mymenu ul li a.mymenu-messages').length != 0 && $('#header .total_new_messages').text()!='0'){
					if($('.mymenu ul li a.mymenu-messages span').length == 0){
						$('.mymenu ul li a.mymenu-messages').append(' <span>('+result+')</span>');
					}else{
						$('.mymenu ul li a.mymenu-messages span').text(' ('+result+')');
					}
				}
				
			}
		}
	});        
}
if($('#header .total_new_messages').length != 0){
	total_new_messages();
	setInterval('total_new_messages()',1000);
}

if($('#header .total_new_frends').text()!='0'){
	if($('.mymenu ul li a.mymenu-frends').length != 0)
		$('.mymenu ul li a.mymenu-frends').append(' <span>('+$('#header .total_new_frends').text()+')</span>');
}
*/
function fulltime ()	{
    var time=new Date();
	year = time.format("yyyy");
	day = time.format("dd");
	monat = time.format("mm");
	switch(monat){
		case '01': mon = 'января'; break;
		case '02': mon = 'февраля'; break;
		case '03': mon = 'марта'; break;
		case '04': mon = 'апреля'; break;
		case '05': mon = 'мая'; break;
		case '06': mon = 'июня'; break;
		case '07': mon = 'июля'; break;
		case '08': mon = 'августа'; break;
		case '09': mon = 'сентября'; break;
		case '10': mon = 'октября'; break;
		case '11': mon = 'ноября'; break;
		case '12': mon = 'декабря'; break;
	}
    $('.clock .date').html(day+' '+mon+' '+year);
    $('.clock .time').html(time.format("HH:MM:ss"));
    setTimeout('fulltime()',500)
}
fulltime();

//$('.menu-top2 li:nth-last-child(2) a').prepend('<img src="/tools/images/mail_ic.png" alt="" />');
$('.menu-top2 li:last-child span').prepend('<img src="/tools/images/vopros_ic.png" alt="" />');
$(".menu-top1 li:nth-child(2)").click(function(){
    $('ul',this).slideToggle(200);
	if($(this).css('border-bottom-color') == 'rgb(215, 215, 215)') 
		$(this).css({'border-bottom-color':'rgb(240, 240, 240)'});
	else 
		$(this).css({'border-bottom-color':'rgb(215, 215, 215)'});
});


function invitation(k){
	$('#InvitationForm_type').val(k);
	$('.errorMessage').text('');
	if(k==1){
		$('#invitation .modal-title').text('Пригласить друга');
		$('#invitation .cmin').text('приглашает Вас в социальную сеть На пенсии');
	}else{
		$('#invitation .modal-title').text('Пригласить друга в сообщество');
		$('#invitation .cmin').text('приглашает Вас в сообщество «'+$('.left-body h1 a').text()+'»');
	}
	$('#invitation').modal();
}
function redaction_message(k){
	$('#Letters_type').val(k);
	$('.errorMessage').text('');
	if(k==1){
		$('#redaction-message .modal-title').text('Написать письмо в редакцию');
	}else{
		$('#redaction-message .modal-title').text('Вопрос специалисту');
	}
	$('#redaction-message').modal();
}

/*end-------------*/

/*-----Comments--------*/
url_array_comment = window.location.href.split('#comment'); 
if(url_array_comment[1]){
	$('html, body').animate({
		scrollTop: $("#comments").offset().top
	}, 1000, function() {
		
		
	});	
}

function show_comment_form(){
	$("#comment-form").slideToggle(200);
	$('#add_comment').slideToggle(200);
}
function otvet_form(id){
	$(".otvet-form-"+id).slideToggle(200);
	$(".otvet-form-"+id).toggleClass("active");  return false;
}
function comment_otvet(comment_id,page_id,type){
	$.ajax({
		type: "post",
		url: "/widget/comotvet",
		data: {comment_id:comment_id,page_id:page_id,type:type,text:$('.text'+comment_id).val()},
		success: function(r){
			$.fn.yiiListView.update("comment-item");
		}
	});
}

/*end-------------*/

/*-----Лайк--------*/
function like(page_id,type){
	$.ajax({
		type: "post",
		url: "/widget/like",
		data: {page_id:page_id,type:type},
		success: function(r){
			if(type == 1 || type == 2 || type == 4){
				$('.like'+type).html('<i class="fa fa-check"></i>');
				$('.total_like').html(parseInt($('.total_like').text())+1);
			}
			if($("#comment-item").length > 0)
				$.fn.yiiListView.update("comment-item");
		}
	});
}

/*end-------------*/

/*-----Рубрики--------*/
$('.sort_select .top').html($('.sort_select li.active a').text().substring(0, 15)+'<img src="/tools/images/selectbox.png" alt=""/>');
$('.sort_select li.active').hide();
$('.sort_select .top').click(function(){
	$(".sort_select ul li.list").slideToggle(200);
	$(".sort_select ul li.list").toggleClass("active");  return false;
	
});

/*end-------------*/

/*-----HOME----*/
$('.homeslider .prew').css({'background-image':'url(/tools/images/pages/'+$(".homeslider li:first-child img").attr('alt')+')'});
$(".homeslider li:first-child").addClass('active');
$("#home_slider_loading").remove();
$(".homeslider .prew_url").attr('href', $(".homeslider ul .active .text a").attr('href'));
$(".homeslider li").click(function() {
    $('.homeslider li').removeClass('active');
    $(this).addClass('active');
    img = $('img',this).attr('alt');
   $(".homeslider .prew_url").attr('href', $(".homeslider ul .active .text a").attr('href'));
    $(".homeslider .prew").animate({opacity:0}, 300, "linear", function(){
        $('.homeslider .prew').css({'background-image':'url(/tools/images/pages/'+img+')'});
        $('.homeslider .prew').animate({opacity:1}, 300);
    });
});
function autoslid(){
    count_li = parseInt($(".homeslider ul li").length);
    for(i=1;i<=count_li;i++){
        if($('.homeslider li:nth-child('+i+')').hasClass('active')){
            if(i==count_li) next_slide = 1; else next_slide = i+1;
            $('.homeslider li:nth-child('+i+')').removeClass('active');
            $('.homeslider li:nth-child('+next_slide+')').addClass('active');
            img = $('.homeslider li:nth-child('+next_slide+') img').attr('alt');
			$(".homeslider .prew_url").attr('href', $(".homeslider ul .active .text a").attr('href'));
            $(".homeslider .prew").animate({opacity:0}, 300, "linear", function(){
                $('.homeslider .prew').css({'background-image':'url(/tools/images/pages/'+img+')'});
                $('.homeslider .prew').animate({opacity:1}, 300);
            });
            break;
        }
    }
}
if($('.homeslider').length > 0)
	setInterval("autoslid()", 10000); /*
$(".homeslider .prew").click(function() {
    url = $(this).attr('data-item');
});*/

/*end-----HOME SLIDER----*/

/*-------MY tools-------*/
function country(name,id){
    $.ajax({
        type: 'post',
        url: '/widget/country',
        data: {id:id},
        success: function(r){
            $('.'+name).html(r);
        }
    });
}

function sex(name,id){
    $.ajax({
        type: 'post',
        url: '/widget/sex',
        data: {id:id},
        success: function(r){
            $('.'+name).html(r);
        }
    });
}

$(".mypage form select, .mypage form input[type=text], #"+name+"-form input[type=password], .mypage form textarea").prop("disabled", true);

function nullTools(id){
	$('.birthstr').show();
	var birth = '';
	if($('#User_day_birth option:selected').val() != 0) 	birth = birth+$('#User_day_birth option:selected').html()+' ';
	if($('#User_month_birth option:selected').val() != 0) 	birth = birth+$('#User_month_birth option:selected').html()+' ';
	if($('#User_year_birth option:selected').val() != 0) 	birth = birth+$('#User_year_birth option:selected').html()+' ';
	$('.birthstr').html(birth);
	if(id!='') id = '#'+id;
    $('.mypage '+id+' td.sel').each(function(i,elem) {
        if($('select',this).val()==0)
            $(this).prepend('<span class="null">не указано</span>');
    });
    $('.mypage '+id+' td.inp').each(function(i,elem) {
		if($('input',this).val()=='' && $('input',this).attr('id')!='User_password' && $('input',this).attr('id')!='User_new_password' && $('input',this).attr('id')!='User_repeat')
            $(this).prepend('<span class="null">не указано</span>');
		if($('textarea',this).val()=='')
            $(this).prepend('<span class="null">не указано</span>');
    });
}
nullTools('');

function textareaHeight(){
    $('.mypage table textarea').each(function(i,elem) {
		id = $(this).attr('id');
		content = null;
		if(!$('body').is('#'+id+'_hide')) $('body').append('<div class="textarea_hiddenDiv" id="'+id+'_hide"></div>');
		content = $(this).val();
		content = content.replace(/\n/g, '<br/>');
		$('#'+id+'_hide').html(content);
		if(content == '')
			$(this).css('height', $('#'+id+'_hide').height());
		else{
			$(this).css({'height':$('#'+id+'_hide').height()+2});
		}
	});
}
textareaHeight();
$('.mypage table textarea').bind('keyup', function() {
	textareaHeight();
});

$(".mypage form .redact a").click(function(){
	$(this).hide();
	$('.birthstr').hide();
	var name = $(this).attr('id');
	$(".mypage form .redact input[name="+name+"]").show();
	$("#"+name+"_view_select").show();
	$('#'+name+'-form table').removeClass('form-none');
	$("#"+name+"-form select, #"+name+"-form input[type=text], #"+name+"-form input[type=password], #"+name+"-form textarea").prop("disabled", false);
	$('#'+name+"-form table span.null").remove();
	$('#'+name+"-form .list").each(function(i,elem) {
		$(this).width($(this).width()+20);
	});
});
$('.mypage .list').each(function(i,elem) {
	$(this).width($(this).width()-20);
});
$(function(){
    $(".mypage form").submit(function(e){
        e.preventDefault(); 
		var name = $("input[type=submit]", this).attr('name');
		var id = $(this).attr('id');
		var m_method=$(this).attr('method');
		var m_action=$(this).attr('action');
		var m_data=$(this).serialize();
		$.ajax({
			type: m_method,
			url: m_action,
			data: m_data,
			success: function(result){
				if(result!='')
					$('#'+name+"-form .info").html(result);
				else{
					$('#'+name+"-form .info").html('');
					$("#"+name+"_view_select").hide();
					$("input[name="+name+"]").hide();
					$(".mypage form .redact a[id="+name+"]").show();
					$('#'+name+'-form table').addClass('form-none');
					$("#"+name+"-form select, #"+name+"-form input[type=text], #"+name+"-form input[type=password], #"+name+"-form textarea").prop("disabled", true);
					$('#'+name+"-form table span.null").show();
					$('#'+name+"-form .list").each(function(i,elem) {
						$(this).width($(this).width()-20);
					});
					nullTools(id); 
					textareaHeight(id);
					$('#User_password').val('');
				}
			}
		});
    });
});

$("#User_month_birth").change(function(){
    mon = parseInt($(this).val());
    day = parseInt($("#User_day_birth").val());
    $("#User_day_birth option[value=30],#User_day_birth option[value=31]").show();
    if(day==0)
        $("#User_day_birth option[value=1]").attr("selected","selected");
    if(mon==2 || mon==4 || mon==6 || mon==9 || mon==11){
        $("#User_day_birth option[value=31]").hide();
        if(day==31)
            $("#User_day_birth option[value=1]").attr("selected","selected");
    }
    if(mon==2){
        $("#User_day_birth option[value=30]").hide();
        if(day==3)
            $("#User_day_birth option[value=1]").attr("selected","selected");
    }
});

$("#User_day_birth").change(function(){
    day = parseInt($(this).val());
    mon = parseInt($("#User_month_birth").val());
    if(mon==0 && day!=0)
        $("#User_month_birth option[value=1]").attr("selected","selected");
});

$('.tools_views li.selected').click(function(){
	$(".tools_view_id").remove();
	var cl = $(this).attr('id');
	$('.tselect ul ul').each(function(i,elem) {
		if($(this).attr('class') != cl)
			$(this).hide();
	});
	$("body").append('<span class="tools_view_id">'+cl+'</span>');
	$("."+cl).slideToggle(50);
});

$('.tools_views li ul li').click(function(){
	var cl = $('.tools_view_id').text();
	$('.'+cl+' li').removeClass('active');
	$(this).attr('class','active');
	$('#'+cl).html('<img src="'+$('.'+cl+' li.active img.tic').attr('src')+'" /> <img src="/tools/images/tic4.png" />');
	$("."+cl).slideToggle(50);
	ar = $(this).attr('id').split('nth-');
	var val = ar[1];
	$('#User_'+cl).val(val);
});

$('.tselect input').each(function(i,elem) {
	var ar = $(this).attr('id').split('User_');
	var cl = ar[1];
	var vl = parseInt($(this).attr('value')) + 1;
	$('.'+cl+' li:nth-child('+vl+')').addClass('active');
	$('#'+cl).html('<img src="'+$('.'+cl+' li:nth-child('+vl+') img.tic').attr('src')+'" /> <img src="/tools/images/tic4.png" />');
});

$(function(){
    $("#name-form").submit(function(e){
        e.preventDefault(); 
		var m_method=$(this).attr('method');
		var m_action=$(this).attr('action');
		var m_data=$(this).serialize();
		$.ajax({
			type: m_method,
			url: m_action,
			data: m_data,
			success: function(result){
				if(result!='')
					$("#name-form .info").html(result);
				else{
					$('.mypage-top h1 span.n').html($('#User_name').val());
					$('.mypage-top h1 span.s').html($('#User_surname').val());
					$('#name-form .info').html('');
					$("#name-form").slideToggle(100);
					$(".mypage-top .name h1").slideToggle(100);
				}
			}
		});
    });
});

$('.mypage-top .name h1 a').click(function(){
	$("#name-form").slideToggle(100);
	$(".mypage-top .name h1").slideToggle(100);
});

/*end-----My tools---*/

/*-----Board---------*/
function board_focus(id){
	$("#board_id_"+id+" textarea").animate({ "min-height":"50px", "max-height":"150px" }, 30);
	$("#board_id_"+id+" .hide_bal").fadeIn();
}

$(document).click( function(event){
	if( $(event.target).closest(".boards .form-board").length ) 
		return;
	$(".boards textarea").animate({ "min-height":"25px", "max-height":"25px" }, 30);
	$(".boards .hide_bal").hide();
	event.stopPropagation();
});

$(function(){
    $("#board-form").submit(function(e){
        e.preventDefault(); 
		var m_method=$(this).attr('method');
		var m_action=$(this).attr('action');
		var m_data=$(this).serialize();
		$.ajax({
			type: m_method,
			url: m_action,
			data: m_data,
			success: function(result){
				if(result!="Error"){
					$('.board-page-hid').remove();
					$('.form-board .count').text(parseInt($('.form-board .count').text())+1);
					$('#board-form textarea').val("");
					$.fn.yiiListView.update('boards-item');
				}
			}
		});
    });
}); 
function ncomment(form){
	var page_id = $("input[name=page_id]", form).val();
	var m_method=form.attr('method');
	var m_action=form.attr('action');
	var m_data=form.serialize();
	$.ajax({
		type: m_method,
		url: m_action,
		data: m_data,
		success: function(result){
			if(result!="Error"){
				$('.bcomments'+page_id).append(result);
				$('#ncomment-form textarea').val("");
				$(".boards textarea").css({ "min-height":"25px", "max-height":"25px" });
				$(".boards .hide_bal").hide();
			}
		}
	});
}
/*
function ncomment(){
	$(function(){
		$(".board-page form").submit(function(e){
			var page_id = $("input[name=page_id]", this).val();
			e.preventDefault(); 
			var m_method=$(this).attr('method');
			var m_action=$(this).attr('action');
			var m_data=$(this).serialize();
			$.ajax({
				type: m_method,
				url: m_action,
				data: m_data,
				success: function(result){
					if(result!="Error"){
						$('.bcomments'+page_id).append(result);
						$('#ncomment-form textarea').val("");
						$(".boards textarea").css({ "min-height":"25px", "max-height":"25px" });
						$(".boards .hide_bal").hide();
					}
				}
			});
		});
	});
}*/
//ncomment(); $(document).bind("ajaxComplete",function(){ ncomment() });
function addboard2(share_id,share_type){
	$.ajax({
		type: 'post',
		url: '/widget/addboard2',
		data: {share_id:share_id,share_type:share_type},
		success: function(result){
			$('.board'+share_type).html('<span class="t"><i class="fa fa-check"></i></span>');
		}
	});
}

function delboard(id){
	$.ajax({
		type: 'post',
		url: '/widget/delboard',
		data: {id:id},
		success: function(result){ 
			$.fn.yiiListView.update('boards-item');
			$('#board_id_'+id).fadeOut(500);
			$('.form-board .count').text(parseInt($('.form-board .count').text())-1);
		}
	});
}

function delcommentboard(id){
	$.ajax({
		type: 'post',
		url: '/widget/delcommentboard',
		data: {id:id},
		success: function(result){
			$('.bal-comment'+id).fadeOut(500);
		}
	});
}
function loadboardfile(type,recipient,author){
	$.ajax({
		type: 'post',
		url: '/widget/loadboardfile',
		data: {type:type,recipient:recipient,author:author},
		success: function(result){
			$('#loadboardfile .modal-body').html(result);
			$('#loadboardfile').modal();
		}
	});
}
function addboardfile(id,image){
	if($(".board-page-hid").length==0){
		$(".boards").prepend('<div class="board-page board-page-hid box"><div class="right"><div class="bod"></div></div></div>');
	}
	$(".board-page-hid .right .bod").prepend('<a title="НАЖМИТЕ НА КАРТИНКУ ЧТОБЫ УДАЛИТЬ" href="javascript:void(0)" id="photo'+id+'" onclick="removeboardfile('+id+')"><img src="/tools/images/users/'+image+'" alt="" /></a>');
	$("#board-form textarea[name=hiddentext]").val($("#board-form textarea[name=hiddentext]").val()+'<a href="javascript:void(0)" class="ph" id="photo'+id+'"><img src="/tools/images/users/'+image+'" alt="" /></a>');
	$('#loadboardfile').modal("hide");
}
function removeboardfile(id){
	$('.board-page-hid #photo'+id).remove();
	var text = '';
	$('.board-page-hid .right .bod a').each(function(i,elem) {
		text = text+'<a href="javascript:void(0)" class="ph" id="'+$(elem).attr('id')+'">'+$(elem).html()+'</a>';
	});	
	$("#board-form textarea[name=hiddentext]").val(text);
	if($(".board-page-hid a").length==0)
		$('.board-page-hid').remove();
}
/*end-----Board---------*/

/*-------Messages-----*/
function message_form(id){
	$('#messageform input[name=recipient]').val(id);
	$.ajax({
		type: 'post',
		url: '/widget/messageview',
		data: {id:id},
		success: function(result){
			$('#messageform .user-info').html(result);
			$('#messageform').modal();
		}
	});
} 

$(function(){
    $("#dialogsusers-form").submit(function(e){
		e.preventDefault(); 
		var m_method=$(this).attr('method');
		var m_action=$(this).attr('action');
		var m_data=$(this).serialize();
		$.ajax({
			type: m_method,
			url: m_action,
			data: m_data,
			success: function(result){
				if(result!='Error'){
					$('#dialogsusers-form textarea').val('');
					$('#messageform').modal('hide');
				}
			}
		});
    });
});

function dialogmessages(){
	id = $(".dialog_id").text(); 
	col = $(".totalcount").text(); 
	$.ajax({
		type: 'POST',
		url: '/user/dialogmessages',
		data: {id:id,col:col},
		success: function(result){ 
			if(result!=''){
				$('.dialog .section1').html(result);
				if($(".scroll-action").text()=='' || $(".scroll-action").text()==0)
					$(".dialog .section1").scrollTop(99999999);
			}
		}
	});        
} 
if($('.dialog .section1').length != 0){
	dialogmessages();
	setInterval('dialogmessages()',1000);
} 

$(".dialog .section1").scroll(function(){ $(".content-position").text($(this).scrollTop());
	if($(this).scrollTop()<$(this).prop('scrollHeight')-400){	
		$(".scroll-action").text(1);
	}else
		$(".scroll-action").text(0);
}); 

$(function(){
	$("#dialog-form").submit(function(e){
		e.preventDefault(); 
		var m_method=$(this).attr('method');
		var m_action=$(this).attr('action');
		$.ajax({
			type: m_method,
			url: m_action,
			data: {text:$('textarea',this).val(),dialog:$(".dialog_id").text()},
			success: function(result){
				if(result!="Error"){
					$('#dialog-form textarea').val('');
					$(".scroll-action").text(0);
					dialogmessages();
				}
			}
		});
    });
	$("#dialog-form textarea").keyup(function(){
		$.ajax({
			type: 'post',
			url: '/user/dialogkeyup',
			data: {dialog:$(".dialog_id").text()},
			success: function(){
				
			}
		});
    });
});

function del_message(message){
	$.ajax({
		type: 'post',
		url: '/user/delmessage',
		data: {message:message},
		success: function(result){
			$('.dialog .section1 #message_id_'+message).fadeOut(500);
			if($('#history-item').length != 0){
				$.fn.yiiListView.update('history-item');
			}else{
				dialogmessages();
			}
		}
	});
}

function del_dialog(id){
	$.ajax({
		type: 'post',
		url: '/user/deldialog',
		data: {id:id},
		success: function(result){
			$.fn.yiiListView.update('dialogs-item');
			$('.dialog_id_'+id).fadeOut(500);
		}
	});
}

/*end-----Messages---------*/

/*-------Frends-----*/
function later_frends(id){
	$.ajax({
		type: 'post',
		url: '/widget/laterfrend',
		data: {id:id},
		success: function(result){
			window.location.href="";
		}
	});
}

function go_frends(id){
	$.ajax({
		type: 'post',
		url: '/widget/gofrend',
		data: {id:id},
		success: function(result){
			window.location.href="";
		}
	});
}

function add_frend(id){
	$.ajax({
		type: 'post',
		url: '/widget/addfrend',
		data: {id:id},
		success: function(result){
			if(result != "")
				$(".add_frend").html(result);
		}
	});
}

function del_frend(id){
	$.ajax({
		type: 'post',
		url: '/widget/delfrend',
		data: {id:id},
		success: function(result){
			window.location.href="";
		}
	});
}
function ajax_del_frend(id){
	$.ajax({
		type: 'post',
		url: '/widget/delfrend',
		data: {id:id},
		success: function(){
			$('.myfrends #friend_id_'+id).fadeOut(500);
			$('.myfrends .friens_count').text(parseInt($('.myfrends .friens_count').text())-1);
			$.fn.yiiListView.update('friends-item');
		}
	});
}
/*end-------Frends-----*/


/*Photos*/
function show_photo_image(image){
	$(".gallery-section").hide();
	max_width = $(window).width()-100;
	max_height = $(window).height()-100;
	modal_width = $(".gallery-section").width();
	modal_height = $(".gallery-section").height();
	$(".gallery-section .i").html('<img src="'+image+'" alt="" style="display: none; max-width: '+max_width+' px; max-height: '+max_height+'px;"/>');
	$(".gallery-section .i img").fadeIn(500);
	$(".gallery-section img").load(function(){
		$(".gallery-section").css({'top':'50%','left':'50%','margin-top':'-'+$(".gallery-section").height()/2+'px','margin-left':'-'+$(".gallery-section").width()/2+'px'});
		setTimeout(function() {
			$(".gallery-section").fadeIn(1000);
			loading_photo_image('false');
		}, 800);
	});
}
function loading_photo_image(e){
	//$(".gallery-section").fadeIn(100);
	//$(".gallery-section .i").append('<img src="/tools/images/loading.gif" alt="" class="ld"/>');
	if(e=='true')
		$(".loading").fadeIn(50);
	else
		$(".loading").fadeOut(50);
}
function close_gallery(){
	$(".gallery-section").fadeOut(1000);
	$(".mask").fadeOut(1500);
}
$(".mask").click(function(){
	close_gallery();
});
$('a.gallery').click(function(e) {
    if($('a.gallery').length <= 1) $('.gallery-section .n').hide();
	loading_photo_image('true');
	e.preventDefault(); 
	$(".mask").fadeIn(1000);
	image = $(this).attr('href');
	$(".gallery-section .n .back i").attr('id','');
	$(".gallery-section .n .next i").attr('id','');
	show_photo_image(image);
});
$(".gallery-section .n .next i").click(function() {
   loading_photo_image('true');
   var default_image = $(".gallery-section .i img").attr('src');
   var sep = '';
   var image = '';
   if($('a.gallery').length > 0){
	   $('a.gallery').each(function(i,elem) {
			if(i==0) var first_image = $(this).attr('href');
			if($(this).attr('href') == default_image){
				sep = i+1;
			}
			if(sep==i)
				image = $(elem).attr('href');
		});	
		if(image == default_image || image=='' || !image)
			image = first_image;
	    show_photo_image(image);
   }
});
$(".gallery-section .n .back i").click(function() {
   loading_photo_image('true');
   var default_image = $(".gallery-section .i img").attr('src');
   var back_image = '';
   var sep = '';
   var image = '';
   if($('a.gallery').length > 0){
	   $('a.gallery').each(function(i,elem) {
			if($(this).attr('href') == default_image)
				sep = 1;
			if(sep!=1) image = $(this).attr('href');
			last_image = $(this).attr('href');
		});	
		if(image == default_image || image=='' || !image)
			image = last_image;
	   show_photo_image(image);
   }
});
function one_gallery(url){
	if(url!=""){
		if(url != window.location.href) loading_photo_image('true');
		ph  = url.split("#photo");
		if(ph[1]){
			$(".mask").fadeIn(1000);
			$.ajax({
				type: 'post',
				url: '/widget/galleryone',
				data: {id:ph[1]},
				success: function(r){
					data = r.split('-&&-');
					$(".gallery-section .n .back i").attr('id','#photo'+data[2]);
					$(".gallery-section .n .next i").attr('id','#photo'+data[1]);
					image = '/tools/images/users/'+data[0];
					show_photo_image(image);
				}
			});
		}
	}
}
$('.all-photos a').click(function(e) {
    if(e.target.className == 'cover')
		one_gallery("#"+this.id);
});
$('.gallery-widget a').click(function(e) {
    if(e.target.className == 'cover')
		one_gallery("#"+this.id);
});
$('a.ph').click(function(e) {
    one_gallery("#"+this.id);
});
$(document).bind("ajaxComplete",function(){
	$('.all-photos a').click(function(e) {
		if(e.target.className == 'cover')
			one_gallery("#"+this.id);
	});
	$('.gallery-widget a').click(function(e) {
		if(e.target.className == 'cover')
			one_gallery("#"+this.id);
	});
	$('a.ph').click(function(e) {
		one_gallery("#"+this.id);
	});
});
one_gallery(window.location.href);
/*--end*/

/*--Left-Social-container*/
$('.right-body').css({'margin-top': Math.floor($('.left-body .bigava').offset().top-$('.right-body').offset().top)+'px'});
/*--end*/

/*--Community*/
$("#communitynew form").submit(function(e){
	e.preventDefault(); 
	var m_method=$(this).attr('method');
	var m_action=$(this).attr('action');
	var m_data=$(this).serialize();
	$.ajax({
		type: m_method,
		url: m_action,
		data: m_data,
		success: function(result){
			if(result!=''){
				$('#communitynew form .info').html(result);
			}else{
				window.location.href="";
			}
		}
	});
});
function go_community(id){
	$.ajax({
		type: 'post',
		url: '/widget/gocommunity',
		data: {id:id},
		success: function(result){
			if(result!='Error')
				window.location.href="";
		}
	});
}
/*--end*/
	
