function FindProxyForURL(url, host) {

var addr="DIRECT";
var addr8086='PROXY 127.0.0.1:8086';
var addr8087='PROXY 127.0.0.1:8087';
var addr8088='PROXY 127.0.0.1:8088';
var addr8580='PROXY 127.0.0.1:8580';
var addr0=addr8087;



if ((host == "localhost") ||(shExpMatch(host, "localhost*")) ||(host == "127.0.0.1")) 
{return "DIRECT";}

else if (shExpMatch(url, "*.cn*")) { return "DIRECT";}
else if (shExpMatch(url, ".*?/cn/.*")) { return "DIRECT";}
else if (shExpMatch(url, "*163.com*")) { return "DIRECT";}
else if (shExpMatch(url, "*baidu*")) { return "DIRECT";}
else if (shExpMatch(url, "*weibo*")) { return "DIRECT";}
else if (shExpMatch(url, "*qq.com*")) { return "DIRECT";}
else if (shExpMatch(url, "*sina*")) { return "DIRECT";}
else if (shExpMatch(url, "*youku*")) { return "DIRECT";}
else if (shExpMatch(url, "*tudou*")) { return "DIRECT";}
else if (shExpMatch(url, "*douban*")) { return "DIRECT";}
else if (shExpMatch(url, "*renren*")) { return "DIRECT";}
else if (shExpMatch(url, "*taobao*")) { return "DIRECT";}
else if (shExpMatch(url, "*tmall*")) { return "DIRECT";}
else if (shExpMatch(url, "*360buy*")) { return "DIRECT";}
else if (shExpMatch(url, "*amazon*")) { return "DIRECT";}
else if (shExpMatch(url, "*alipay*")) { return "DIRECT";}
else if (shExpMatch(url, "*bank*")) { return "DIRECT";}
else if (shExpMatch(url, "*itcast*")) { return "DIRECT";}
else if (shExpMatch(url, "*verycd*")) { return "DIRECT";}
else if (shExpMatch(url, "*codeskulptor*")) { return "DIRECT";}
else if (shExpMatch(url, "*voanews.com*")) { return "DIRECT";}
else if (shExpMatch(url, "*waiting*")) { return "DIRECT";}
else if (shExpMatch(url, "*waiting*")) { return "DIRECT";}
else if (shExpMatch(url, "*waiting*")) { return "DIRECT";}
else if (shExpMatch(url, "*waiting*")) { return "DIRECT";}


else if (shExpMatch(url, "*twit*")) {return addr0;}
else if (shExpMatch(url, "*ytimg*")) { return addr0;}
else if (shExpMatch(url, "*youtube*")) { return addr0;}
else if (shExpMatch(url, "*bbcchinese*")) { return addr0;}
else if (shExpMatch(url, "*ftchinese*")) { return addr0;}
else if (shExpMatch(url, "*chinese.rfi.fr*")) { return addr0;}

else if (shExpMatch(url, "*mitbbs*")) { return addr0;}
else if (shExpMatch(url, "*dw-world*")) { return addr0;}
else if (shExpMatch(url, "*gfw*")) { return addr0;}
else if (shExpMatch(url, "*twitpic*")) { return addr0;}
else if (shExpMatch(url, "*bbc.co*")) { return addr0;}

else if (shExpMatch(url, "*mtw.tl*")) { return addr0;}
else if (shExpMatch(url, "*.ly*")) { return addr0;}
else if (shExpMatch(url, "*t.co*")) { return addr0;}
else if (shExpMatch(url, "*j.mp*")) { return addr0;}
else if (shExpMatch(url, "*yfrog*")) { return addr0;}



else if (shExpMatch(url, "*facebook*")) { return addr0;}
else if (shExpMatch(url, "*blogspot*")) { return addr0;}
else if (shExpMatch(url, "*flickr*")) { return addr0;}
else if (shExpMatch(url, "*appspot*")) { return addr0;}


else if (shExpMatch(url, "*gmail*")) { return addr0;}
else if (shExpMatch(url, "*google*")) { return addr0;}
else if (shExpMatch(url, "*goo.gl*")) { return addr0;}



else if (shExpMatch(url, "*.tw*")) { return addr0;}



else if (shExpMatch(url, "*scribd*")) { return addr0;}
else if (shExpMatch(url, "*market.android*")) { return addr0;}
else if (shExpMatch(url, "*voachinese*")) { return addr0;}
else if (shExpMatch(url, "*aboluowang*")) { return addr0;}
else if (shExpMatch(url, "*danke4china*")) { return addr0;}
else if (shExpMatch(url, "*nytimes*")) { return addr0;}
else if (shExpMatch(url, "*cnn.com*")) { return addr0;}
else if (shExpMatch(url, "*wsj.com*")) { return addr0;}
else if (shExpMatch(url, "*washingtonpost*")) { return addr0;}
else if (shExpMatch(url, "*time.com*")) { return addr0;}
else if (shExpMatch(url, "*reuters.com*")) { return addr0;}
else if (shExpMatch(url, "*theepochtimes*")) { return addr0;}
else if (shExpMatch(url, "*wiki*")) { return addr0;}
else if (shExpMatch(url, "*xmarks*")) { return addr0;}
else if (shExpMatch(url, "*heqinglian*")) { return addr0;}
else if (shExpMatch(url, "*businessweek*")) { return addr0;}
else if (shExpMatch(url, "*sourceforge*")) { return addr0;}
else if (shExpMatch(url, "*hrichina*")) { return addr0;}
else if (shExpMatch(url, "*meetup*")) { return addr0;}
else if (shExpMatch(url, "*stackoverflow*")) { return addr0;}
else if (shExpMatch(url, "*github*")) { return addr0;}
else if (shExpMatch(url, "*wordpress*")) { return addr0;}
else if (shExpMatch(url, "*khanacademy*")) { return addr0;}
//else if (shExpMatch(url, "*note.youdao.com*")) { return addr0;}
else if (shExpMatch(url, "*codeeval*")) { return addr0;}
else if (shExpMatch(url, "*waiting*")) { return addr0;}
else if (shExpMatch(url, "*waiting*")) { return addr0;}

else {return "DIRECT";}


}
