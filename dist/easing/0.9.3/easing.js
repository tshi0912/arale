define("#easing/0.9.3/easing",["#jquery/1.7.2/jquery"],function(a,b,c){var d=Math.PI,e=Math.pow,f=Math.sin,g=1.70158,h={easeNone:function(a){return a},easeIn:function(a){return a*a},easeOut:function(a){return(2-a)*a},easeBoth:function(a){return(a*=2)<1?.5*a*a:.5*(1- --a*(a-2))},easeInStrong:function(a){return a*a*a*a},easeOutStrong:function(a){return 1- --a*a*a*a},easeBothStrong:function(a){return(a*=2)<1?.5*a*a*a*a:.5*(2-(a-=2)*a*a*a)},backIn:function(a){return a===1&&(a-=.001),a*a*((g+1)*a-g)},backOut:function(a){return(a-=1)*a*((g+1)*a+g)+1},backBoth:function(a){var b=g,c=(b*=1.525)+1;return(a*=2)<1?.5*a*a*(c*a-b):.5*((a-=2)*a*(c*a+b)+2)},elasticIn:function(a){var b=.3,c=b/4;return a===0||a===1?a:-(e(2,10*(a-=1))*f((a-c)*2*d/b))},elasticOut:function(a){var b=.3,c=b/4;return a===0||a===1?a:e(2,-10*a)*f((a-c)*2*d/b)+1},elasticBoth:function(a){var b=.45,c=b/4;return a===0||(a*=2)===2?a:a<1?-0.5*e(2,10*(a-=1))*f((a-c)*2*d/b):e(2,-10*(a-=1))*f((a-c)*2*d/b)*.5+1},bounceIn:function(a){return 1-h.bounceOut(1-a)},bounceOut:function(a){var b=7.5625,c;return a<1/2.75?c=b*a*a:a<2/2.75?c=b*(a-=1.5/2.75)*a+.75:a<2.5/2.75?c=b*(a-=2.25/2.75)*a+.9375:c=b*(a-=2.625/2.75)*a+.984375,c},bounceBoth:function(a){return a<.5?h.bounceIn(a*2)*.5:h.bounceOut(a*2-1)*.5+.5}};c.exports=h;var i=a("#jquery/1.7.2/jquery");i.extend(i.easing,h)});