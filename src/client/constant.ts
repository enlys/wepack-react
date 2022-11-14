/* eslint-disable quote-props */
// 用户风险等级对应关系
export const userRiskLevel = {
  1: '最低风险',
  2: '保守型',
  3: '谨慎型',
  4: '稳健型',
  5: '积极型',
  6: '激进型',
};

// 产品风险等级
export const productRiskLevel = {
  1: '最低风险',
  2: '低风险',
  3: '中低风险',
  4: '中风险',
  5: '中高风险',
  6: '高风险',
};

// 适当性匹配结果
export const matchFlag = {
  0: '相匹配',
  1: '不匹配',
};

// 大写佣金
export const payPercent = {
  0: '零', 1: '一', 2: '二', 3: '三', 4: '四', 5: '五', 6: '六', 7: '七', 8: '八', 9: '九', 10: '十',
};

// 适当性匹配模板
export const adequaryHTML = (dom) => `<html lang="en"><head><meta charset="UTF-8" /><meta name="viewport" content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0" /><title>适当性评估</title><style>body,h1,h2,h3,h4,h5,h6,p,ul,ol,dl,dd,figure,menu,input,fieldset,textarea,button,select,th,td,div,span,header,nav,footer{margin:0;padding:0;-webkit-text-size-adjust:none}h1,h2,h3,h4,h5,h6,b,strong{font-weight:normal;font-size:100%}*{margin:0;padding:0;font:16px '宋体';line-height:25px;}html{position:relative;width:100%;height:100%;overflow:hidden;}body{position:fixed;top:0;left:0;width:100%;height:100%;overflow-x:hidden;overflow-y:hidden;}#app{width:100%;height:100%;}.adequary{width:100%;height:100%;}body div{margin-top:5px;}.tip{padding:20px;overflow-x:hidden;overflow-y:scroll;height:90%;-webkit-overflow-scrolling:touch;}.tip:after{content:' ';display:block;height:44px;width:100%;}.title{text-align:center;}.underline{display:inline-block;min-width:90px;border-bottom:1px solid #000;padding:0 10px 5px 10px;word-break:break-all;}.underline-xs{display:inline-block;min-width:120px;border-bottom:1px solid #000;padding:0 10px 5px 10px;word-break:break-all;}.bold{font-weight:bold;}.content-right{text-align:right;padding-right:10px;}.footer{height:44px;line-height:44px;text-align:center;font-size:16px;color:#ffffff;background:#ff8000;background:linear-gradient(-90deg,#ff5900 0%,#ff8000 100%);margin-top:14.5px;max-width:inherit;width:100%;position:fixed;bottom:0;}.disable_submit{background:linear-gradient(90deg,#80889a 0%,#5e6678 100%);}</style></head><body>${dom}</body></html>`;

// 渠道
export const channelOptions = {
  app: '1',
  pc: '2',
  wx: '3',
  yzf: '4',
};

// 周期
export const PERIOD = {
  '00': '永久',
  '01': '天',
  '07': '周',
  '14': '月',
  '16': '季',
  '19': '半年',
  '20': '年',
};

// 特别提示模板
export const productImgHTML = (dom) => `<html lang="en"><head><meta charset="UTF-8" /><meta name="viewport" content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0" /><title>特别提示</title><style>body,h1,h2,h3,h4,h5,h6,p,ul,ol,dl,dd,figure,menu,input,fieldset,textarea,button,select,th,td,div,span,header,nav,footer{margin:0;padding:0;-webkit-text-size-adjust:none}h1,h2,h3,h4,h5,h6,b,strong{font-weight:normal;font-size:100%}*{margin:0;padding:0;font:16px '宋体';line-height:25px;}html{position:relative;width:100%;height:100%;overflow:hidden;}body{position:fixed;top:0;left:0;width:100%;height:100%;overflow-x:hidden;overflow-y:hidden;}#app{width:100%;height:100%;}}</style></head><body>${dom}</body></html>`;

// 签约页面模板
export const signImgHTML = (dom) => `<html lang="en"><head><meta charset="UTF-8" /><meta name="viewport" content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0" /><title>特别提示</title><style>body,h1,h2,h3,h4,h5,h6,p,ul,ol,dl,dd,figure,menu,input,fieldset,textarea,button,select,th,td,div,span,header,nav,footer{margin:0;padding:0;-webkit-text-size-adjust:none}h1,h2,h3,h4,h5,h6,b,strong{font-weight:normal;font-size:100%}*{margin:0;padding:0;font:16px '宋体';line-height:25px;}html{position:relative;width:100%;height:100%;overflow:hidden;}body{position:fixed;top:0;left:0;width:100%;height:100%;overflow-x:hidden;overflow-y:hidden;}#app{width:100%;height:100%;}}</style></head><body>${dom}</body></html>`;

// 产品类型
export const productTypeOptions = {
  '82': '投顾锦囊',
  '83': '短线宝',
  '87': '沪深港资金',
  '88': '融资追击',
};

// 付费方式
export const signPayType = {
  PRE: 1,
  WECHAT: 2,
  COMM: 3,
  GOLD: 4,
  SIN_COMM: 5,
  RISE_COMM: 6,
};

// 付费方式
export const payTypeOptions = {
  1: '现金支付',
  3: '提佣支付',
  4: '点金宝',
  5: '单笔提佣',
  6: '固定升拥',
};

// 产品周期(单位天)
export const SPERIODDAYS = {
  '070': 7,
  '140': 30,
  '160': 90,
  '190': 180,
  '200': 365,
  '000': '永久',
};

// 签约页的价格选择周期显示
export const ConstPeriod = {
  '00': '永久',
  '01': '天',
  '07': '周',
  '14': '月',
  '16': '季',
  '19': '半年',
  '20': '年',
};

// 签约页的聚宝盆弹框显示
export const givePeriod = {
  '00': '永久',
  '01': '1天',
  '07': '1周',
  '14': '1个月',
  '16': '1季度',
  '19': '半年',
  '20': '1年',
};

// 产品类型
export const productType = {
  'servicePack': 10,              // 服务包
  'internalReference': 81,        // 内参
  'tips': 82,                     // 锦囊
  'shortLineTreasure': 83,        // 短线宝
};

// PC签约模板
export const pcSignImgHTML = (dom) => `<html lang="en"><head><meta charset="UTF-8" /><meta name="viewport" content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0" /><title>签约确认</title><style>body,h1,h2,h3,h4,h5,h6,p,ul,ol,dl,dd,figure,menu,input,fieldset,textarea,button,select,th,td,div,span,header,nav,footer{margin:0;padding:0;-webkit-text-size-adjust:none}h1,h2,h3,h4,h5,h6,b,strong{font-weight:normal;font-size:100%}*{margin:0;padding:0;font:16px '宋体';line-height:25px;}html{position:relative;width:100%;height:100%;overflow:hidden;}body{position:fixed;top:0;left:0;width:100%;height:100%;overflow-x:hidden;overflow-y:hidden;}#app{width:100%;height:100%;}}.product-dialog{background:#fff;max-height:848px;min-height:730px;left:0;position:absolute;right:0;top:0;z-index:10}.product-form+.product-form{margin-top:0}.product-form>div{border-top:1px solid #e4e7ec}.product-item{min-height:36px;line-height:36px;overflow:hidden;padding:6px 15px 6px 25px}.product-label{color:#5e6678;float:left;font-size:14px;width:181px}.product-con{display:block;overflow:hidden}.product-txt{color:#333;display:block;float:left;font-size:15px;margin-right:15px}.product-codeid{border:1px solid #e4e7ec;border-radius:2px;box-sizing:border-box;color:#000;display:block;font-size:14px;padding:8px 10px;width:130px}.product_link{display:block;overflow:hidden;padding:6px 15px 6px 25px}.product_link:active{background:#f2f4f8}.product_required{color:#858c9e;display:block;float:right;font-size:14px;margin:0 0 0 15px;padding:0 14px 0 0;padding-right:calc(-130%);position:relative}.product_tip{color:#858c9e;display:block;float:right;font-size:14px;margin:0 0 0 15px;padding:0 14px 0 0;position:relative}.product_tip:before{border-right:1px solid #5e6678;border-bottom:1px solid #5e6678;content:"";display:block;height:8px;pointer-events:none;position:absolute;right:2px;top:50%;width:8px;-webkit-transform:translate3d(0,-50%,0) rotateZ(-45deg)}.product-radio-wrap{display:block;margin:0;overflow:hidden}.free-img{width:40px}.product-radio{float:left;font-size:14px;height:35px;line-height:35px;margin-right:26px;overflow:hidden;position:relative}.product_radio_icon{background:#ff8000;border-radius:50%;display:block;height:16px;left:2px;pointer-events:none;position:absolute;top:50%;width:16px;-webkit-transform:translateY(-50%)}.product_radio_icon:before{border:1px solid #ff8000;border-radius:50%;bottom:-2px;content:"";left:-2px;position:absolute;right:-2px;top:-2px}.product-radio-txt{color:#333}.product_select{display:block;float:left;font-size:14px}.product_select_txt{border:1px solid #e4e7ec;border-radius:2px;box-sizing:border-box;display:block;font-size:14px;height:30px;line-height:30px;overflow:hidden;padding:0 30px 0 10px;position:relative;width:150px}.product_select_txt:before,.product_select_txt:after{content:"";pointer-events:none;position:absolute;right:0;top:0}.product_select_txt:before{border-left:1px solid #e4e7ec;bottom:0;right:30px}.product_select_txt:after{border:1px solid transparent;border-width:7px 6px;border-top-color:#aaa;height:0;right:3px;top:11px;width:0;-webkit-transform:translateX(-50%)}.product_select_txt i{color:#ff3d00;margin-right:4px}.product_footer{background:#fff;bottom:0;left:0;position:fixed;right:0;text-align:center;z-index:1000}.product_footer_con{display:block;font-size:0;line-height:1;margin:10px}.product_footer_label{color:#333;font-size:14px}.product_footer_txt{color:#ff3d00;font-size:15px}.product_footer_txt i{font-size:12px;margin-right:4px}.product_footer_btn{display:block;margin:10px}.product_footer_submit{background-color:#ff8000;background-image:-webkit-gradient(linear,0 0,100% 100%,color-stop(0,#ff8000),color-stop(1,#ff5900));border:0;color:#fff;display:block;font-size:14px;height:44px;line-height:44px;width:100%}.product_footer_submit:active{opacity:.7}.selector{height:20px;width:20px;margin-right:10px;vertical-align:-4px;-webkit-background-size:18px 18px;background:no-repeat center center;background-size:18px 18px;display:inline-table}.selector_inactive{background-image:url("../../assets/images/check_inactive.png")}.selector_active{background-image:url("../../assets/images/filled.png")}[v-cloak]{display:none}.dialog_modal{display:none}.dialog_open{display:block}.dialog_bg{position:fixed;top:0;left:0;width:100%;height:100%;background-color:#000;opacity:.5;z-index:11}.dialog{position:fixed;top:200px;left:0;width:100%;font-size:15px;z-index:12}.dialog .cnt{margin:0 200px 0 200px;background-color:#fff;border-radius:5px}.dialog_title{width:100%;border-bottom:1px solid #dedfe1}.dialog_title img{width:100%;height:auto;display:block;border-top-left-radius:5px;border-top-right-radius:5px}.dialog_cnt{width:90%;padding:15px 0 15px 0;margin:0 auto;text-align:center;color:#333;line-height:23px}.dialog_cnt .title{width:100%;color:#007aff;font-size:18px}.dialog_cnt .cnt{margin-top:5px}.dialog_cnt span{color:#007aff}.dialog_btn{border-top:1px solid #dedfe1;width:100%;height:50px;line-height:50px;text-align:center;color:#007aff;overflow:hidden;font-size:14px}.dialog_btn .left{float:left;width:50%;height:50px;border-right:1px solid #dedfe1}.dialog_btn .right{float:right;width:49%}.dialog_btn .alink{width:100%;height:50px;line-height:50px;text-align:center;color:#007aff;display:block}.pay_percent{color:#ff3d00}.mask{position:fixed;top:0;left:0;right:0;bottom:0;background:rgba(2,18,31,0.4);z-index:1000}.goldCowryTipBox{z-index:9999;width:85%;position:absolute;left:0;right:0;top:50%;background:#fff;border-radius:6px;margin-left:auto;margin-right:auto;margin-top:-60%;box-sizing:border-box}.goldCowryTipBox .box-wrapper{padding:26px}
.goldCowryTipBox .box-wrapper .box-header{display:flex;justify-content:center;align-items:center;font-weight:bolder;font-size:21px;text-align:center;border-bottom:1px solid #e4e7ec;padding-bottom:20px}.goldCowryTipBox .box-wrapper .box-header img{width:101px}.goldCowryTipBox .box-wrapper .box-content{padding-top:20px;font-size:14px;color:#151515;line-height:25px}.goldCowryTipBox .box-wrapper .box-content span{font-weight:bolder;margin-right:5px}.goldCowryTipBox .box-footer{border-top:1px solid #ededed;height:50px;text-align:center;line-height:50px;color:#ff3d00;font-size:17px;font-weight:bolder}.select-wrap ul{width:187px;box-sizing:border-box;position:absolute;background-color:#fff;box-shadow:0 4px 4.5px 2px #eee;z-index:100;border:1px solid #e4e7ec;border-top:0;left:-1px}.select-wrap ul li{height:35px;line-height:35px;border-bottom:1px solid #e4e7ec;padding-left:12.5px}.select-wrap{margin-left:178px;border:1px solid #e4e7ec;height:35px;line-height:35px;width:152px;position:relative;box-sizing:border-box}.expander{width:35px;height:35px;background:url("../../assets/images/Path 17@2x.png") no-repeat center;background-size:11px 7px;display:inline-block;vertical-align:3px;position:absolute;right:-35px;border:1px solid #e4e7ec;top:-1px;box-sizing:border-box}.f_size16{font-size:14px!important}.price{color:#ff3d00;font-size:15px;font-family:PingFangSC-Medium}.btn_modify,.btn_modifyed{width:52px;height:26px;line-height:22px;font-size:14px;color:#ff5900;text-align:center;border:1px solid #ff5900;border-radius:3px;float:left;margin-top:2px;cursor:pointer;margin:6px 0 0 60px;background:#fff}.btn_modify:hover{background:#ff5900;color:#fff}.btn_modifyed:hover{background:#ff5900;color:#fff}.contract_item{border-bottom:0 solid #f2f2f2;padding:10px 0 10px 25px;overflow:hidden}.contract_item .info_r{margin-left:181px}.contract_item .info_r .name{font-size:14px;color:#000;padding-right:30px}.contract_item .info_r .tit{font-weight:bold}.contract_item .label_l,.contract_item p{font-size:14px;color:#333;line-height:30px}.contract_item .label_l{width:181px;float:left;font-size:14px;color:#5e6678}.contract_item .label_h{margin-top:5px}.contract_item input{width:164px;height:38px;border:1px solid #eaeaea;padding:0;text-indent:14px;font-size:14px;color:#333}.contract_item input::-webkit-input-placeholder{color:#cdcdcd;opacity:1}.contract_item label{color:#cdcdcd;margin-left:8px}.contract_item label,.contract_item span{line-height:30px;display:inline-block;font-size:14px;vertical-align:top}.contract_item span{margin-right:8px}.modify_pop .contract_item input{width:323px}.contract_item .tel_num{height:30px;border:0;text-indent:0;color:#333;float:left;color:#ff5900;text-shadow:0 0 0 #333;text-fill-color:transparent;-webkit-text-fill-color:transparent}.contract_item .tel_num::-webkit-input-placeholder{color:#333}.contract_item .btn_modify,.contract_item .btn_modifyed,.order_item .btn_modify,.order_item .btn_modifyed{width:52px;height:26px;line-height:22px;font-size:14px;color:#ff5900;text-align:center;border:1px solid #ff5900;border-radius:3px;float:left;margin-top:2px;cursor:pointer;margin:2px 0 0 60px;background:#fff}.contract_item .btn_modify:hover,.order_item .btn_modify:hover{background:#ff5900;color:#fff}.contract_item .btn_modifyed,.order_item .btn_modifyed{width:84px;background:#ff5900;color:#fff;margin:7px 0 0 40px}.contract_item .v_code{width:190px;float:left;background:#f8f9fb}.modify_pop .contract_item .v_code{background:#fff}.contract_item .btn_send{font-size:14px;color:#ff5900;border:1px solid #ff5900;width:113px;height:40px;line-height:38px;text-align:center;float:left;margin-left:20px;cursor:pointer;background:#f8f9fb}.contract_item .btn_send:hover{background:#ff5900;color:#fff}.modify_pop .contract_item .btn_send{background:#fff}.contract_item .btn_send.sending{border:1px solid #858c9e;color:#858c9e}.contract_item .btn_send.sending:hover{background:transparent}.contract_item .tip_tel{font-size:12px;color:#ff5a00;padding-left:22px;background:url("../../assets/images/icon_tip.png") no-repeat left center;float:right;margin-left:30px}.contract_item.code_item{background:#f8f9fb;padding:20px 0 20px 25px}.contract_item.choice_item{border-bottom:0}.contract_item .choice_box{margin:11px 0 0 -3px}.contract_item .choice_play{width:19px;height:19px;position:relative;z-index:2;cursor:pointer;margin:10px -1px 0 0;opacity:0}.contract_item .choice_box label{position:relative;font-size:14px;color:#5e6678;cursor:none;margin-right:53px}.contract_item .btn_cancel_modify,.contract_cnt .contract_item .btn_modifyed{width:52px;height:26px;line-height:22px;font-size:16px;color:#ff5900;text-align:center;border:1px solid #ff5900;border-radius:3px;float:left;margin-top:2px;cursor:pointer;margin:7px 0 0 10px;background:#fff}.contract_item .btn_cancel_modify:hover{background:#ff5900;color:#fff}.choice_box input[type="radio"]+label::before{content:"";display:inline-block;vertical-align:middle;width:17px;height:17px;border-radius:50%;border:1px solid #9e9e9e;position:absolute;left:-30px;top:10px;z-index:1}
.choice_box input[type="radio"]:checked+label::before{background-color:#fff;width:7px;height:7px;border:6px solid #ff5900}.btn_confirm,.btn_renew{display:inline-block;width:102px;height:32px;line-height:32px;text-align:center;font-size:15px;color:#ff5a00;border:1px solid #ff5a00;border-radius:100px;position:relative;margin-top:40px;margin-bottom:20px;left:50%;margin-left:-82px;box-sizing:border-box;-webkit-box-sizing:border-box}.btn_confirm:hover{background-image:linear-gradient(-90deg,#ff5900 0,#ffbd3e 100%);background-image:-webkit-linear-gradient(0deg,#ffbd3e 0,#ff5900 100%);box-shadow:0 6px 7px -5px rgba(255,123,21,0.65);-webkit-box-shadow:0 6px 7px -5px rgba(255,123,21,0.65);color:#fff;text-decoration:none;border:0}.btn_confirm:active{background-image:linear-gradient(-90deg,#cc4e04 0,#ce9032 100%);background-image:-webkit-linear-gradient(0deg,#ce9032 0,#cc4e04 100%);box-shadow:0 6px 7px -5px rgba(255,123,21,0.65);-webkit-box-shadow:0 6px 7px -5px rgba(255,123,21,0.65);color:#fff;text-decoration:none;border:0}.btn_contract{width:171px}.product-content-title{font-size:14px;font-weight:bold;display:block}.info_r_style{height:auto;display:flex}.original_price{position:absolute;padding-left:200px;width:150px;color:#c6c6c6;text-decoration:line-through}.coupon_list ::-webkit-scrollbar{width:8px;height:8px}.coupon_list ::-webkit-scrollbar-thumb{background:#e1e2e5;border-radius:3px}.coupon_list ::-webkit-scrollbar-corner{background:#e1e2e5}.can_use_coupon_label{font-family:PingFangSC-Medium;font-size:18px;color:#ff5a00;line-height:40px;width:181px;float:left}.coupon_list{background:#fff;box-shadow:0 0 14px 0 rgba(0,0,0,0.12);border-radius:10px;padding:20px}.coupon_list .coupon_list_scroll{height:310px;overflow:auto;padding-right:30px}.coupon_list .coupon_item{background-size:100% 100%;transform:rotate(-0deg);background-color:#c6c6c6;border:1px solid #e4e7ec;box-shadow:0 1px 10px 2px rgba(152,152,152,0.1);border-radius:4px;width:354px;height:126px;padding:8px}.dazhe{background-image:url("../../assets/images/card_bg_dazhe2_n@2x.png")}.jianmian{background-image:url("../../assets/images/card_bg_jianmian2_n@2x.png")}.coupon_list .coupon_item .coupon_check{width:20px;height:20px;position:absolute;left:12px;top:12px;background-image:url('../../assets/images/icon_right_n@2x.png')}.coupon_list .coupon_item .coupon_checked{width:20px;height:20px;position:absolute;left:12px;top:12px;background-image:url("../../assets/images/icon_right_d@2x.png")}.coupon_list .coupon_item .coupon_uncheck{background-image:url("../../assets/images/icon_right_n@2x.png")}.coupon_list .coupon_item .coupon_type{border-radius:10px;width:50px;height:20px;position:absolute;left:30px;top:31px}.coupon_list .coupon_item .coupon_type_des{font-family:PingFangSC-Medium;font-size:12px;color:#fff;text-align:center;width:50px;height:20px}.coupon_list .coupon_item .coupon_name{font-family:PingFangSC-Semibold;font-size:20px;color:#000;width:210px;height:33px;position:absolute;left:90px;top:25px;text-overflow:ellipsis;white-space:nowrap;overflow:hidden}.coupon_list .coupon_item .coupon_scope{font-family:PingFangSC-Regular;font-size:14px;color:#5e6678;width:270px;height:20px;position:absolute;left:30px;top:65px;vertical-align:baseline}.coupon_list .coupon_item .coupon_scope_des{max-width:120px;margin-right:0;color:#ff5a00;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.coupon_list .coupon_item .coupon_period{font-family:PingFangSC-Regular;font-size:14px;color:#858c9e;width:270px;height:20px;position:absolute;left:30px;top:113px}.no_coupon_img{margin-left:-184px;margin-bottom:10px}.no_coupon_desc{font-family:PingFangSC-Regular;font-size:16px;color:#333;letter-spacing:0}.coupon_price{position:absolute;right:-195px;width:150px;color:#c6c6c6;text-decoration:line-through}</style></head><body>${dom}</body></html>`;

// pc适当性模板
export const pcAdequaryHTML = (dom) => `<html lang="en"><head><meta charset="UTF-8" /><meta name="viewport" content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0" /><title>适当性匹配</title><style>body,h1,h2,h3,h4,h5,h6,p,ul,ol,dl,dd,figure,menu,input,fieldset,textarea,button,select,th,td,div,span,header,nav,footer{margin:0;padding:0;-webkit-text-size-adjust:none}h1,h2,h3,h4,h5,h6,b,strong{font-weight:normal;font-size:100%}*{margin:0;padding:0;font:16px '宋体';line-height:25px;}html{position:relative;width:100%;height:100%;overflow:hidden;}body{position:fixed;top:0;left:0;width:100%;height:100%;overflow-x:hidden;overflow-y:hidden;}#app{width:100%;height:100%;}}adequacy-dialog p{font-size:16px;color:#333;text-align:justify;line-height:28px}.adequacy-dialog p span{margin-right:0;border-bottom:1px solid #9a9a9a;padding:0 10px;color:#151515}.adequacy-dialog .title{margin-bottom:20px}.adequacy-dialog .title h3{font-size:20px;color:#333;line-height:28px;text-align:center}.adequacy-dialog .title p{font-size:14px;color:#a3a3a3;text-align:center;line-height:22px}.adequacy-dialog .content{padding:33px 20px 0;height:500px;overflow-y:auto}.adequacy-dialog .content p{font-size:16px;color:#333;text-align:justify;line-height:28px}.adequacy-dialog .content .warning{color:#ff450a}.adequacy-dialog .content .user-confirm{margin-top:57px}.adequacy-dialog .content .user-confirm p{margin-top:9px}.adequacy-dialog .content .user-confirm p span{display:inline-block;text-align:right}.adequacy-dialog .content .user-confirm p:nth-child(1) span{width:126px}.adequacy-dialog .content .user-confirm p:nth-child(2) span{width:160px}.adequacy-dialog .btn-confirm{display:inline-block;width:173px;height:32px;line-height:32px;text-align:center;border:1px solid #ff5a00;border-radius:100px;position:absolute;left:50%;margin-left:-52px;box-sizing:border-box;font-size:15px;color:#ff5a00}.adequacy-dialog .btn-confirm:hover{cursor:pointer;background-image:linear-gradient(-90deg,#ff5900 0,#ffbd3e 100%);box-shadow:0 6px 7px -5px rgba(255,123,21,0.65);color:#fff;text-decoration:none;border:0}</style></head><body>${dom}</body></html>`;
