let code = "javascript:var%20%24jscomp%3D%24jscomp%7C%7C%7B%7D%3B%24jscomp.scope%3D%7B%7D%3B%24jscomp.createTemplateTagFirstArg%3Dfunction(a)%7Breturn%20a.raw%3Da%7D%3B%24jscomp.createTemplateTagFirstArgWithRaw%3Dfunction(a%2Cc)%7Ba.raw%3Dc%3Breturn%20a%7D%3B%24jscomp.arrayIteratorImpl%3Dfunction(a)%7Bvar%20c%3D0%3Breturn%20function()%7Breturn%20c%3Ca.length%3F%7Bdone%3A!1%2Cvalue%3Aa%5Bc%2B%2B%5D%7D%3A%7Bdone%3A!0%7D%7D%7D%3B%24jscomp.arrayIterator%3Dfunction(a)%7Breturn%7Bnext%3A%24jscomp.arrayIteratorImpl(a)%7D%7D%3B%24jscomp.makeIterator%3Dfunction(a)%7Bvar%20c%3D%22undefined%22!%3Dtypeof%20Symbol%26%26Symbol.iterator%26%26a%5BSymbol.iterator%5D%3Bif(c)return%20c.call(a)%3Bif(%22number%22%3D%3Dtypeof%20a.length)return%20%24jscomp.arrayIterator(a)%3Bthrow%20Error(String(a)%2B%22%20is%20not%20an%20iterable%20or%20ArrayLike%22)%3B%7D%3B%24jscomp.arrayFromIterator%3Dfunction(a)%7Bfor(var%20c%2Ch%3D%5B%5D%3B!(c%3Da.next()).done%3B)h.push(c.value)%3Breturn%20h%7D%3B%24jscomp.arrayFromIterable%3Dfunction(a)%7Breturn%20a%20instanceof%20Array%3Fa%3A%24jscomp.arrayFromIterator(%24jscomp.makeIterator(a))%7D%3Bdocument.cookie.split(%22%3B%20%22).forEach(function(a)%7Ba%3Da.split(%22%3D%22)%3B%22ct0%22%3D%3Da%5B0%5D%26%26(window.t%3Da%5B1%5D)%7D)%3Bwi%3D%22withQuickPromoteEligibilityTweetFields%22%3Bs%3Ddocument.getElementsByTagName(%22script%22)%3Bfor(i%3Ds.length%3Bi--%3B)if(s%5Bi%5D.innerText.includes(%22INITIAL_STATE%22))%7Bvar%20_%24jscomp%241%3DJSON.parse(s%5Bi%5D.innerText.split(%22%3D%22)%5B1%5D.split(%22%7D%3B%22)%5B0%5D%2B%22%7D%22)%2Ca%24jscomp%241%3D_%24jscomp%241.entities.users.entities%5BObject.keys(_%24jscomp%241.entities.users.entities)%5B0%5D%5D%3Bn%3Da%24jscomp%241.screen_name%3Bd%3D%7Bvariables%3A%7BrawQuery%3A%22from%3A%22%2Bn%2Ccount%3A20%2Ccursor%3A%22%22%2CquerySource%3A%22recent_search_click%22%2Cproduct%3A%22Latest%22%7D%2Cfeatures%3A%7B%7D%7D%3By%3D%7Bvariables%3A%7BuserId%3Aa%24jscomp%241.id_str%2Ccount%3A20%2CincludePromotedContent%3A!0%2CwithCommunity%3A!0%2CwithVoice%3A!0%2CwithV2Timeline%3A!0%7D%2Cfeatures%3A%7B%7D%7D%3By.variables%5Bwi%5D%3D!0%3Bf%3D_%24jscomp%241.featureSwitch.defaultConfig%7Dg%3Dfunction(a)%7Bfor(var%20c%3DwebpackChunk_twitter_responsive_web%2Ch%3Dc.length%3Bh--%3B)for(var%20N%20in%20c%5Bh%5D%5B1%5D)try%7Bif(1%3D%3Dc%5Bh%5D%5B1%5D%5BN%5D.length)%7Bvar%20u%3D%7B%7D%3Bc%5Bh%5D%5B1%5D%5BN%5D(u)%3Bif(u.exports.operationName%3D%3Da)%7Bfor(var%20v%3Du.exports.metadata.featureSwitches%2Ck%3D%7B%7D%2Cp%3Dv.length%3Bp--%3B)k%5Bv%5Bp%5D%5D%3Dv%5Bp%5Din%20f%3Ff%5Bv%5Bp%5D%5D.value%3A!0%3Breturn%5Bu.exports.queryId%2Ck%5D%7D%7D%7Dcatch(O)%7B%7D%7D%3Bx%3Dfunction(a)%7Ba.setRequestHeader(%22Authorization%22%2C%22Bearer%20AAAAAAAAAAAAAAAAAAAAANRILgAAAAAAnNwIzUejRCOuH5E6I8xnZz4puTs%253D1Zv7ttfk8LF81IUq16cHjhLTvJu4FA33AGWWjCpTnA%22)%3Ba.setRequestHeader(%22x-csrf-token%22%2Ct)%3Ba.setRequestHeader(%22x-twitter-active-user%22%2C%22yes%22)%3Ba.setRequestHeader(%22x-twitter-auth-type%22%2C%22OAuth2Session%22)%3Ba.setRequestHeader(%22x-twitter-client-language%22%2C%22ja%22)%3Ba.setRequestHeader(%22content-type%22%2C%22application%2Fjson%22)%3Ba.withCredentials%3D!0%7D%3BM%3Dm%3D0%3Be%3Dfunction(a)%7Bif(!(0%3EM))%7Bif(0%3C%3DM%26%265%3EM)if(window.confirm(%22%5Cu300c%22%2Ba.legacy.full_text%2B%22%5Cu300d%5Cu3092%5Cu524a%5Cu9664%5Cu3057%5Cu307e%5Cu3059%22))M%2B%2B%3Belse%7Balert(%22%5Cu6761%5Cu4ef6%5Cu306e%5Cu6307%5Cu5b9a%5Cu304c%5Cu9593%5Cu9055%5Cu3048%5Cu3066%5Cu3044%5Cu308b%5Cu3001%5Cu3082%5Cu3057%5Cu304f%5Cu306f%5Cu4f55%5Cu3089%5Cu304b%5Cu306e%5Cu30d0%5Cu30b0%5Cu304c%5Cu8d77%5Cu304d%5Cu3066%5Cu3044%5Cu308b%5Cu53ef%5Cu80fd%5Cu6027%5Cu304c%5Cu3042%5Cu308a%5Cu307e%5Cu3059%5Cn%5Cu3082%5Cu3046%5Cu4e00%5Cu5ea6%5Cu304a%5Cu8a66%5Cu3057%5Cu304f%5Cu3060%5Cu3055%5Cu3044%22)%3B0%3D%3DM%26%26(l.innerText%3D%220%5Cu4ef6%5Cu524a%5Cu9664%5Cu3057%5Cu307e%5Cu3057%5Cu305f%5Cuff0f%22)%3Bl.innerText%3Dl.innerText.slice(0%2C-1)%3BM%3D-1%3Breturn%7D5%3D%3DM%26%26(alert(%22%5Cu78ba%5Cu8a8d%5Cu304c%5Cu7d42%5Cu308f%5Cu308a%5Cu307e%5Cu3057%5Cu305f%5Cn%5Cu3053%5Cu306e%5Cu30a2%5Cu30e9%5Cu30fc%5Cu30c8%5Cu3092%5Cu9589%5Cu3058%5Cu308b%5Cu3068%5Cu4e00%5Cu62ec%5Cu524a%5Cu9664%5Cu3092%5Cu958b%5Cu59cb%5Cu3057%5Cu307e%5Cu3059%5CnX%5Cu306e%5Cu753b%5Cu9762%5Cu306f%5Cu958b%5Cu3044%5Cu305f%5Cu307e%5Cu307e%5Cu306b%5Cu3057%5Cu3066%5Cu3044%5Cu3066%5Cu304f%5Cu3060%5Cu3055%5Cu3044%22)%2CM%2B%2B)%3Bvar%20c%3Dnew%20XMLHttpRequest%3Bc.open(%22POST%22%2C%22https%3A%2F%2Ftwitter.com%2Fi%2Fapi%2Fgraphql%2F%22%2Bg(%22DeleteTweet%22)%5B0%5D%2B%22%2FDeleteTweet%22)%3Bx(c)%3Bc.onload%3Dfunction()%7Bm%2B%2B%3Bl.innerText%3D-1%3D%3DM%3Fm%2B%22%5Cu4ef6%5Cu524a%5Cu9664%5Cu3057%5Cu307e%5Cu3057%5Cu305f%22%3Am%2B%22%5Cu4ef6%5Cu524a%5Cu9664%5Cu3057%5Cu307e%5Cu3057%5Cu305f%22%2Bl.innerText.slice(-1)%7D%3Bc.send(JSON.stringify(%7Bvariables%3A%7Btweet_id%3Aa.rest_id%2Cdark_request%3A!1%7D%7D))%7D%7D%3Br%3D%22UserTweets%22%3Bz%3Dfunction(a)%7B%22UserTweetsAndReplies%22!%3Dr%3F(r%3D%22UserTweetsAndReplies%22%2Cdelete%20y.variables%5Bwi%5D%2Cq(!0%2Cy))%3A(a%3F(b%3D%22API%5Cu5236%5Cu9650%5Cu3067%5Cu3059%5Cu3002%5Cn%22%2B(new%20Date(a)).toLocaleTimeString()%2B%22%5Cu306b%5Cu89e3%5Cu9664%5Cu3055%5Cu308c%5Cu307e%5Cu3059%5Cu306e%5Cu3067%5Cu3001%5Cu305d%5Cu308c%5Cu4ee5%5Cu964d%5Cu306b%5Cu518d%5Cu5ea6%5Cu304a%5Cu8a66%5Cu3057%5Cu4e0b%5Cu3055%5Cu3044%22%2C0%3Cm%3Falert(b%2B%22%5Cu3002%5Cn%5Cu307e%5Cu305f%5Cu524a%5Cu9664%5Cu4ef6%5Cu6570%5Cu304c0%5Cu306e%5Cu5834%5Cu5408%5Cu3001%5Cu5f53%5Cu30c4%5Cu30fc%5Cu30eb%5Cu304c%5Cu524a%5Cu9664%5Cu53ef%5Cu80fd%5Cu306a%5Cu671f%5Cu9593%5Cu3088%5Cu308a%5Cu524d%5Cu306e%5Cu671f%5Cu9593%5Cu304c%5Cu6307%5Cu5b9a%5Cu3055%5Cu308c%5Cu3066%5Cu3044%5Cu308b%5Cu53ef%5Cu80fd%5Cu6027%5Cu304c%5Cu3042%5Cu308a%5Cu307e%5Cu3059%22)%3Aalert(b))%3A(alert(%22%5Cu5b8c%5Cu4e86%5Cu3057%5Cu307e%5Cu3057%5Cu305f%5Cu3002%5Cn%5Cu5168%5Cu3066%5Cu524a%5Cu9664%5Cu3067%5Cu304d%5Cu3066%5Cu3044%5Cu306a%5Cu3044%5Cu5834%5Cu5408%5Cu3001%5Cu518d%5Cu5ea6%5Cu306e%5Cu5b9f%5Cu884c%5Cu3067%5Cu524a%5Cu9664%5Cu3055%5Cu308c%5Cu308b%5Cu3053%5Cu3068%5Cu304c%5Cu3042%5Cu308a%5Cu307e%5Cu3059%22)%2Cl.innerText.includes(%22%5Cu691c%22)%26%26(l.innerText%3D%220%5Cu4ef6%5Cu524a%5Cu9664%5Cu3057%5Cu307e%5Cu3057%5Cu305f%5Cuff0f%22))%2Cl.innerText%3Dl.innerText.slice(0%2C-1))%7D%3Bsk%3D!0%3Bbi%3Dfunction(a)%7Breturn%20BigInt(a)%7D%3Bcu%3Dfunction(a)%7Bfor(var%20c%3D(bi(t2)%2Bbi(1E3))*bi(67108863)%2Bbi(%22503803561041329172778%22)%2Ch%3D%5B%5D.concat(%24jscomp.arrayFromIterable(%22ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_%22))%2CN%3D%22%22%3Bc%3Ebi(0)%3B)N%3Dh%5Bc%25bi(64)%5D%2BN%2Cc%2F%3Dbi(64)%3Breturn%20a.slice(0%2C26)%2BN.slice(0%2C11)%2Ba.slice(37%2C99)%7D%3Bq%3Dfunction(a%2Cc)%7Bvar%20h%3Da%3Fg(r)%3Ag(%22SearchTimeline%22)%3Bc.features%3Dh%5B1%5D%3Bvar%20N%3D%22%3F%22%2BObject.entries(c).map(function(v)%7Breturn%20v%5B0%5D.replaceAll(%22%2522%22%2C%22%22)%2B%22%3D%22%2BencodeURIComponent(JSON.stringify(v%5B1%5D))%7D).join(%22%26%22)%2Cu%3Dnew%20XMLHttpRequest%3Bu.open(%22GET%22%2C%22https%3A%2F%2Fapi.twitter.com%2Fgraphql%2F%22%2Bh%5B0%5D%2B%22%2F%22%2B(a%3Fr%3A%22SearchTimeline%22)%2BN)%3Bx(u)%3Bu.onreadystatechange%3Dfunction()%7Bif(4%3D%3Du.readyState)if(200%3D%3Du.status)%7Bvar%20v%3D!0%2Ck%2Cp%3DJSON.parse(u.responseText).data%3Bp%3Da%3Fp.user.result.timeline_v2%3Ap.search_by_raw_query.search_timeline%3Bp%3Dp.timeline.instructions%3Bvar%20O%3D0%3Ba%3Afor(%3BO%3Cp.length%3BO%2B%2B)%7Bif(%22entries%22in%20p%5BO%5D)var%20w%3Dp%5BO%5D.entries%3Belse%20if(%22entry%22in%20p%5BO%5D)w%3D%5Bp%5BO%5D.entry%5D%3Belse%20continue%3Btry%7Bfor(k%3D0%3Bk%3Cw.length%3Bk%2B%2B)try%7Bif(!w%5Bk%5D.entryId.includes(%22promoted%22)%26%26!w%5Bk%5D.entryId.includes(%22cursor%22))if(a)%7Bvar%20H%3Dvoid%200%2CQ%3Dvoid%200%2CG%3Dvoid%200%2CR%3Dvoid%200%2CV%3Dvoid%200%3Bif(w%5Bk%5D.entryId.includes(%22conversation%22))H%3Dw%5Bk%5D.content.items%3Belse%20if(w%5Bk%5D.entryId.includes(%22tweet%22))H%3D%5B%7Bitem%3Aw%5Bk%5D.content%7D%5D%3Belse%20continue%3Bfor(Q%3D0%3BQ%3CH.length%3BQ%2B%2B)G%3DH%5BQ%5D.item.itemContent.tweet_results.result%2C%22tweet%22in%20G%26%26(G%3DG.tweet)%2CG.legacy.user_id_str%3D%3Dy.variables.userId%26%26(R%3Dnew%20Date(G.legacy.created_at)%2CV%3Dju(G.legacy.full_text%2CG.legacy.quote_count%2BG.legacy.retweet_count%2CG.legacy.favorite_count)%2Ct1%3C%3DR%26%26R%3C%3Dt2%26%26V%26%26e(G)%2CH%5BQ%5D.item.clientEventInfo.component.includes(%22pin%22)%7C%7C(v%3D!1)%2CQ%3D%3DH.length-1%26%26R%3Ct1%26%26(v%3D!0))%7Delse%7Bvar%20K%3Dw%5Bk%5D.content.itemContent.tweet_results.result%3B%22tweet%22in%20K%26%26(K%3DK.tweet)%3Bvar%20S%3Dnew%20Date(K.legacy.created_at)%2CW%3Dju(K.legacy.full_text%2CK.legacy.quote_count%2BK.legacy.retweet_count%2CK.legacy.favorite_count)%3Bt1%3C%3DS%26%26S%3C%3Dt2%26%26W%26%26e(K)%3BS%3C%3Dt2%26%26(sk%3D!1)%3Bv%3DS%3Ct1%3F!0%3A!1%7Delse%20if(w%5Bk%5D.entryId.includes(%22bottom%22))%7Bif(0%3EM)break%20a%3Bvar%20T%3Da%3FJSON.parse(JSON.stringify(y))%3AJSON.parse(JSON.stringify(d))%3BH%3D%5B%22%5Cuff0f%22%2C%22%5Cu30fc%22%2C%22%5Cuff3c%22%5D%3Bvar%20U%3Dl.innerText%3Bl.innerText%3DU.slice(0%2C-1)%2BH%5B(H.indexOf(U%5BU.length-1%5D)%2B1)%253%5D%3BT.variables.cursor%3Dw%5Bk%5D.content.value%3B!a%26%26sk%26%26(T.variables.cursor%3Dcu(T.variables.cursor)%2Csk%3D!1)%3Bv%26%26a%3Fz()%3Av%26%26!a%7C%7C%22RT%20%22%3D%3DA%26%26!a%3Fq(!0%2Cy)%3Aq(a%2CT)%3Bbreak%20a%7D%7Dcatch(X)%7B%7D%7Dcatch(X)%7B%7D%7D%7Delse%20a%3Fz(1E3*Number(u.getResponseHeader(%22X-Rate-Limit-Reset%22)))%3Aq(!0%2Cy)%7D%3Bu.send()%7D%3Bl%3Ddocument.createElement(%22div%22)%3Bvar%20css1%3D'type%3D%22datetime-local%22%20style%3D%22padding%3A0%2010px%3Bwidth%3A45%25%3Bheight%3A30px%3Bbackground%3A%23d8d8d8%3Bbox-sizing%3Aborder-box%3Bfont-size%3A12px%3B%22'%2Ccss2%3D'type%3D%22number%22%20style%3D%22padding%3A0%2010px%3Bwidth%3A60px%3Bheight%3A30px%3Bbackground%3A%23d8d8d8%3Bbox-sizing%3Aborder-box%3Bfont-size%3A12px%3B%22%20value%3D%220%22%3E'%2Cselect%3Dfunction(a%2Cc)%7Breturn'style%3D%22padding%3A0%2010px%3Bwidth%3A65px%3Bheight%3A30px%3Bbackground%3A%23d8d8d8%3Bbox-sizing%3Aborder-box%3Bfont-size%3A12px%3Bfont-weight%3Abold%3B%22%20name%3D%22example%22%3E%3Coption%20value%3D%22true%22%3E'%2Ba%2B'%3C%2Foption%3E%3Coption%20value%3D%22false%22%3E'%2Bc%2B%22%3C%2Foption%3E%3C%2Fselect%3E%22%7D%3Bl.style.cssText%3D%22z-index%3A99999%3B%20width%3A80%25%3B%20height%3A350px%3B%20position%3Afixed%3B%20background-color%3A%23fbf7f7%3B%20color%3A%23000%3B%20inset%3A%200%3B%20margin%3A%20auto%3B%20white-space%3A%20nowrap%3B%20text-align%3Acenter%3B%20line-height%3A50px%3B%20font-size%3A13px%3B%20font-weight%3Abold%3B%20font-family%3Asans-serif%3B%22%3Bl.innerHTML%3D'%3Cinput%20id%3D%22G%22%20'%2Bcss1%2B'%3E%5Cu3000%5Cu304b%5Cu3089%3Cbr%3E%3Cinput%20id%3D%22H%22%20'%2Bcss1%2B'%3E%5Cu3000%5Cu307e%5Cu3067%5Cu306e%3Cbr%3E%3Cinput%20type%3D%22text%22%20id%3D%22A%22%20style%3D%22padding%3A0%2010px%3Bwidth%3A20%25%3Bheight%3A30px%3Bbackground%3A%23d8d8d8%3Bbox-sizing%3Aborder-box%3Bfont-size%3A13px%3B%22%20placeholder%3D%22%5Cu6307%5Cu5b9a%5Cu306a%5Cu3057%22%3E%3Cspan%20id%3D%22ex%22%20style%3D%22font-weight%3Alighter%3Btext-decoration%3Aunderline%3Bfont-size%3A11px%3Bcolor%3Ablue%3B%22%3E%20(%5Cu6307%5Cu5b9a%5Cu65b9%5Cu6cd5)%20%3C%2Fspan%3E%5Cu3068%5Cu3044%5Cu3046%5Cu6587%5Cu5b57%5Cu5217%5Cu304c%20%3Cselect%20id%3D%22B%22'%2Bselect(%22%5Cu306a%5Cu304f%22%2C%22%5Cu3042%5Cu308a%22)%2B'%3Cbr%3E%5Cu30ea%5Cu30c4%5Cu30a4%5Cu30fc%5Cu30c8%5Cu6570%5Cu304c%20%3Cinput%20id%3D%22C%22'%2Bcss2%2B'%5Cu56de%3Cselect%20id%3D%22D%22'%2Bselect(%22%5Cu4ee5%5Cu4e0a%22%2C%22%5Cu4ee5%5Cu4e0b%22)%2B'%20%5Cu304b%5Cu3064%3Cbr%3E%5Cu3044%5Cu3044%5Cu306d%5Cu6570%5Cu304c%20%3Cinput%20id%3D%22E%22'%2Bcss2%2B'%5Cu56de%3Cselect%20id%3D%22F%22'%2Bselect(%22%5Cu4ee5%5Cu4e0a%22%2C%22%5Cu4ee5%5Cu4e0b%22)%2B'%3Cbr%3E%5Cu306e%5Cu30c4%5Cu30a4%5Cu30fc%5Cu30c8%5Cu3092%3Cbr%3E%3Cbutton%20style%3D%22width%3A80%25%3Bheight%3A40px%3Bborder%3Anone%3Bborder-radius%3A25px%3Bbackground-color%3A%23737373%3Bcolor%3A%23fff%3Bfont-weight%3Abold%3B%22%20id%3D%22de%22%3E%5Cu524a%5Cu9664%5Cu3059%5Cu308b%5Cuff01%3C%2Fbutton%3E'%3B%22twitter.com%22!%3Dwindow.location.host%3Falert(%22Twitter(X)%5Cu3092%5Cu958b%5Cu3044%5Cu305f%5Cu72b6%5Cu614b%5Cu3067%5Cu5b9f%5Cu884c%5Cu3057%5Cu3066%5Cu304f%5Cu3060%5Cu3055%5Cu3044%22)%3Adocument.body.appendChild(l)%3BA%3DC%3DE%3D%22%22%3BB%3DD%3DF%3D!0%3Bju%3Dfunction(a%2Cc%2Ch)%7Bif(B)%7Bif(a.includes(A)%26%26%22%22!%3DA)return!1%7Delse%20if(!a.includes(A))return!1%3Bif(D)%7Bif(C%3Ec)return!1%7Delse%20if(C%3Cc)return!1%3Bif(F)%7Bif(E%3Eh)return!1%7Delse%20if(E%3Ch)return!1%3Breturn!0%7D%3BP%3Dfunction(a)%7Breturn%20document.getElementById(a)%7D%3Bch%3Dfunction()%7BI%3DP(%22G%22).value%3BJ%3DP(%22H%22).value%3Bif(%22%22!%3DI%26%26%22%22!%3DJ)if(t1%3Dnew%20Date(I)%2Ct2%3Dnew%20Date(J)%2Ct1%3E%3Dt2%26%26(L%3Dt1%2Ct1%3Dt2%2Ct2%3DL)%2Ct2.setSeconds(59)%2CA%3DP(%22A%22).value%2CB%3D%22true%22%3D%3DP(%22B%22).value%2CC%3DNumber(P(%22C%22).value)%2CD%3D%22true%22%3D%3DP(%22D%22).value%2CE%3DNumber(P(%22E%22).value)%2CF%3D%22true%22%3D%3DP(%22F%22).value%2C!Number.isInteger(C)%7C%7C0%3EC%7C%7C!Number.isInteger(E)%7C%7C0%3EE)alert(%220%5Cu4ee5%5Cu4e0a%5Cu306e%5Cu6574%5Cu6570%5Cu3092%5Cu5165%5Cu529b%5Cu3057%5Cu3066%5Cu304f%5Cu3060%5Cu3055%5Cu3044%22)%3Belse%7Bvar%20a%3D%22%40%22%2Bn%2B%22%5Cu306e%5Cn%22%2Bt1.toLocaleString(%22ja%22).slice(0%2C-3)%2B%22%20~%20%22%2Bt2.toLocaleString(%22ja%22).slice(0%2C-3)%2B%22%5Cn%22%3B%22%22!%3DA%26%26(a%2B%3D%22%5Cu300c%22%2BA%2B%22%5Cu300d%5Cu3092%22%2Ca%2B%3DB%3F%22%5Cu542b%5Cu307e%5Cu306a%5Cu3044%5Cn%22%3A%22%5Cu542b%5Cu3080%5Cn%22)%3B0%3CC%3F(a%2B%3D%22%5Cu30ea%5Cu30c4%5Cu30a4%5Cu30fc%5Cu30c8%5Cu3055%5Cu308c%5Cu305f%5Cu56de%5Cu6570%5Cu304c%22%2BC%2B%22%5Cu56de%22%2Ca%2B%3DD%3F%22%5Cu4ee5%5Cu4e0a%5Cn%22%3A%22%5Cu4ee5%5Cu4e0b%5Cn%22)%3AD%7C%7C(a%2B%3D%22%5Cu30ea%5Cu30c4%5Cu30a4%5Cu30fc%5Cu30c8%5Cu3055%5Cu308c%5Cu3066%5Cu3044%5Cu306a%5Cu3044%5Cn%22)%3B0%3CE%3F(a%2B%3D%22%5Cu3044%5Cu3044%5Cu306d%5Cu3055%5Cu308c%5Cu305f%5Cu56de%5Cu6570%5Cu304c%22%2BE%2B%22%5Cu56de%22%2Ca%2B%3DF%3F%22%5Cu4ee5%5Cu4e0a%5Cn%22%3A%22%5Cu4ee5%5Cu4e0b%5Cn%22)%3AF%7C%7C(a%2B%3D%22%5Cu3044%5Cu3044%5Cu306d%5Cu3055%5Cu308c%5Cu3066%5Cu3044%5Cu306a%5Cu3044%5Cn%22)%3Bwindow.confirm(a%2B%22%5Cn%5Cu4ee5%5Cu4e0a%5Cu306e%5Cu6761%5Cu4ef6%5Cu3092%5Cu6e80%5Cu305f%5Cu3059%5Cu30c4%5Cu30a4%5Cu30fc%5Cu30c8%5Cu3092%5Cu524a%5Cu9664%5Cu3057%5Cu307e%5Cu3059%22)%26%26window.confirm(%22%5Cu958b%5Cu767a%5Cu8005%5Cu306f%5Cu4e00%5Cu5207%5Cu306e%5Cu8cac%5Cu4efb%5Cu3092%5Cu8ca0%5Cu3044%5Cu304b%5Cu306d%5Cu307e%5Cu3059%5Cn%5Cu524a%5Cu9664%5Cu3092%5Cu958b%5Cu59cb%5Cu3057%5Cu3066%5Cu3088%5Cu308d%5Cu3057%5Cu3044%5Cu3067%5Cu3059%5Cu304b%5Cuff1f%22)%26%26(l.innerHTML%3D%22%5Cu30c4%5Cu30a4%5Cu30fc%5Cu30c8%5Cu3092%5Cu691c%5Cu7d22%5Cu4e2d%5Cuff0f%22%2Cl.style.lineHeight%3D%2280px%22%2Cl.style.height%3D%2280px%22%2Cl.style.fontSize%3D%2220px%22%2C%22%22%3D%3DA%7C%7CB%7C%7CA.includes(%22https%3A%2F%2F%22)%7C%7C(d.variables.rawQuery%2B%3D%22%20%22%2BA)%2Calert(%22%5Cu78ba%5Cu8a8d%5Cu306e%5Cu305f%5Cu3081%5Cu3001%5Cu524a%5Cu9664%5Cu3059%5Cu308b%5Cu30c4%5Cu30a4%5Cu30fc%5Cu30c8%5Cu6700%5Cu521d%5Cu306e5%5Cu4ef6%5Cu304c%5Cu8868%5Cu793a%5Cu3055%5Cu308c%5Cu307e%5Cu3059%22)%2Cq(!1%2Cd))%7Delse%20alert(%22%5Cu30c4%5Cu30a4%5Cu6d88%5Cu3057%5Cu3059%5Cu308b%5Cu671f%5Cu9593%5Cu3092%5Cu5165%5Cu529b%5Cu3057%5Cu3066%5Cu304f%5Cu3060%5Cu3055%5Cu3044%22)%7D%3Bex%3Dfunction()%7Balert(%22%5Cu753b%5Cu50cf%5Cu3092%5Cu542b%5Cu3080%5Cu30c4%5Cu30a4%5Cu30fc%5Cu30c8%20%3D%20%5Cu300chttps%3A%2F%2Ft.co%2F%5Cu300d%5Cn%5Cn%5Cu30ea%5Cu30c4%5Cu30a4%5Cu30fc%5Cu30c8%20%3D%20%5Cu300cRT%20%5Cu300d%5Cn%5Cn%5Cu30ea%5Cu30d7%5Cu30e9%5Cu30a4%20%3D%20%5Cu300c%40%5Cu300d%5Cn%5Cn%5Cu3068%5Cu5909%5Cu63db%5Cu3057%5Cu3066%5Cu6307%5Cu5b9a%5Cu3067%5Cu304d%5Cu307e%5Cu3059%22)%7D%3Bb2%3DP(%22ex%22)%3Bb2.addEventListener(%22click%22%2Cex)%3Bb1%3DP(%22de%22)%3Bb1.addEventListener(%22click%22%2Cch)%3Bvoid+0";
let min = `javascript:try{document.cookie.split("; ").forEach(v=>{let _=v.split('=');if(_[0]=="ct0")window.t=_[1]});wi="withQuickPromoteEligibilityTweetFields";s=document.getElementsByTagName("script");for(i=s.length;i--;){if(s[i].innerText.includes("INITIAL_STATE")){let _=JSON.parse(s[i].innerText.split("=")[1].split("};")[0]+"}"),a=_.entities.users.entities[Object.keys(_.entities.users.entities)[0]];n=a.screen_name;d={variables:{rawQuery:"from:"+n,count:20,cursor:"",querySource:"recent_search_click",product:"Latest"},features:{}};y={variables:{userId:a.id_str,count:20,includePromotedContent:!0,withCommunity:!0,withVoice:!0,withV2Timeline:!0},features:{}};y.variables[wi]=!0;f=_.featureSwitch.defaultConfig}}g=(a)=>{let _=webpackChunk_twitter_responsive_web;for(let i=_.length;i--;){for(let b in _[i][1]){try{if(_[i][1][b].length==1){let c={};_[i][1][b](c);if(c.exports.operationName==a){let h=c.exports.metadata.featureSwitches,k={};for(let j=h.length;j--;){if(h[j]in f)k[h[j]]=f[h[j]].value;else k[h[j]]=!0}return[c.exports.queryId,k]}}}catch{}}}};x=(a)=>{let _=(b,c)=>a.setRequestHeader(b,c);_('Authorization','Bearer AAAAAAAAAAAAAAAAAAAAANRILgAAAAAAnNwIzUejRCOuH5E6I8xnZz4puTs%3D1Zv7ttfk8LF81IUq16cHjhLTvJu4FA33AGWWjCpTnA');_('x-csrf-token',t);_('x-twitter-active-user','yes');_('x-twitter-auth-type','OAuth2Session');_('x-twitter-client-language','ja');_('content-type','application/json');a.withCredentials=!0};m=0;e=(a)=>{let c=new XMLHttpRequest();c.open('POST','https://twitter.com/i/api/graphql/'+g('DeleteTweet')[0]+'/DeleteTweet');x(c);c.onload=function(){m++;l.innerText=m+"件削除しました"};c.send(JSON.stringify({"variables":{"tweet_id":a,"dark_request":!1}}))};r="UserTweets";z=(a)=>{if(r!="UserTweetsAndReplies"){r="UserTweetsAndReplies";delete y.variables[wi];q(!0,y);return}if(a)alert("API制限です。%5Cn"+new Date(a).toLocaleTimeString()+"に解除されますので、それ以降に再度お試し下さい");else alert("完了しました。%5Cn全て削除できていない場合、再度の実行で削除されることがあります")};q=(_,a)=>{let se="SearchTimeline",b=_?g(r):g(se);a.features=b[1];let h="?"+Object.entries(a).map((c)=>{return \`\${c[0].replaceAll("%2522","")}=\${encodeURIComponent(JSON.stringify(c[1]))}\`}).join("&"),c=new XMLHttpRequest(),i=_?r:se;c.open('GET','https://api.twitter.com/graphql/'+b[0]+'/'+i+h);x(c);c.onreadystatechange=()=>{if(c.readyState==4){if(c.status==200){let b=!0,k,j,i,h=JSON.parse(c.responseText).data;h=_?h.user.result.timeline_v2:h.search_by_raw_query.search_timeline;h=h.timeline.instructions;lo:for(j=0;j<h.length;j++){if("entries" in h[j])k=h[j].entries;else if("entry" in h[j])k=[h[j].entry];else continue;try{for(i=0;i<k.length;i++){try{if(!k[i].entryId.includes("promoted")&&!k[i].entryId.includes("cursor")){if(_){let p,o,u,v;if(k[i].entryId.includes("conversation"))p=k[i].content.items;else if(k[i].entryId.includes("tweet"))p=[{item:k[i].content}];else continue;for(o=0;o<p.length;o++){u=p[o].item.itemContent.tweet_results.result;if("tweet" in u)u=u.tweet;if(u.legacy.user_id_str==y.variables.userId){v=new Date(u.legacy.created_at);if(t1<=v&&v<=t2)e(u.rest_id);if(!p[o].item.clientEventInfo.component.includes("pin"))b=!1;if(o==p.length-1&&v<t1)b=!0}}}else{let u=k[i].content.itemContent.tweet_results.result;if("tweet" in u)u=u.tweet;let v=new Date(u.legacy.created_at);if(t1<=v&&v<=t2)e(u.rest_id);b=(v<t1)?!0:!1}}else if(k[i].entryId.includes("bottom")){let w=_?JSON.parse(JSON.stringify(y)):JSON.parse(JSON.stringify(d));w.variables.cursor=k[i].content.value;if(b&&_)z();else if(b&&!_)q(!0,y);else q(_,w);break lo}}catch{}}}catch{}}}else{if(_)z(Number(c.getResponseHeader("X-Rate-Limit-Reset"))*1000);else q(!0,y)}}};c.send()};l=document.createElement('div');var css1='type="datetime-local" style="padding%3A0+10px%3Bwidth%3A45%25%3Bheight%3A30px%3Bbackground%3A%23d8d8d8%3Bbox-sizing%3Aborder-box%3Bfont-size%3A12px%3B"';l.style.cssText="z-index%3A99999%3Bwidth%3A80%25%3Bheight%3A150px%3Bposition%3Afixed%3Bbackground-color%3A%23fbf7f7%3Bcolor%3A%23000%3Binset%3A0%3Bmargin%3Aauto%3Bwhite-space%3Anowrap%3Btext-align%3Acenter%3Bline-height%3A50px%3Bfont-size%3A13px%3Bfont-weight%3Abold%3Bfont-family%3Asans-serif%3B";l.innerHTML='<input id="G" '+css1+'>　から<br><input id="H" '+css1+'>　までのツイートを<br><button style="width%3A80%25%3Bheight%3A40px%3Bborder%3Anone%3Bborder-radius%3A25px%3Bbackground-color%3A%23737373%3Bcolor%3A%23fff%3Bfont-weight%3Abold%3B" id="de">削除する！</button>';if(window.location.host!="twitter.com")alert("Xを開いた状態で実行してください");else document.body.appendChild(l);P=(a)=>{return document.getElementById(a)};ch=()=>{I=P('G').value;J=P('H').value;if(I!=""&&J!=""){t1=new Date(I);t2=new Date(J);if(t1>=t2){L=t1;t1=t2;t2=L}t2.setSeconds(59);if(!window.confirm("@"+n+"の%5Cn"+t1.toLocaleString("ja").slice(0,-3)+" ~ "+t2.toLocaleString("ja").slice(0,-3)+"%5Cnのツイートを削除します"))return;if(window.confirm('開発者は一切の責任を負いかねます。%5Cn削除を開始しますか？')){l.innerHTML='0件削除しました';l.style.lineHeight="150px";alert("このアラートを閉じると開始します。%5CnXの画面は開いたままにしていてください");q(!1,d)}}else alert("削除期間を入力してください")};b1=P('de');b1.addEventListener('click',ch)}catch(e){alert(e)}`;

    
document.addEventListener("DOMContentLoaded", () => {
    setUpAccordion();
    document.getElementsByClassName("let")[0].setAttribute('href', code);
    document.getElementsByClassName("let")[document.getElementsByClassName("let").length - 1].setAttribute('href', code);
    const button = document.getElementsByClassName("let")[1];
    button.addEventListener('click', () => {
        if (!navigator.clipboard) {
            alert("このブラウザは対応していません");
            return;
        }
        navigator.clipboard.writeText(code).then(
            () => {
                alert('コードをコピーしました。');
            },
            () => {
                alert('コピーに失敗しました。');
            });
    });
    if (document.getElementsByClassName("let").length == 4) {
        const button2 = document.getElementsByClassName("let")[2];
        button2.addEventListener('click', () => {
            if (!navigator.clipboard) {
                alert("このブラウザは対応していません");
                return;
            }
            navigator.clipboard.writeText(min).then(
                () => {
                    alert('軽量版のコードをコピーしました。');
                },
                () => {
                    alert('コピーに失敗しました。');
                });
        });
    }
});

const setUpAccordion = () => {
    const details = document.querySelectorAll(".js-details");
    const IS_OPENED_CLASS = "is-opened";

    details.forEach((element) => {
        const summary = element.querySelector(".js-summary");
        const content = element.querySelector(".js-content");

        summary.addEventListener("click", (event) => {
            event.preventDefault();
            if (element.classList.contains(IS_OPENED_CLASS)) {
                element.classList.toggle(IS_OPENED_CLASS);
                closingAnim(content, element).restart();
            } else {
                element.classList.toggle(IS_OPENED_CLASS);
                element.setAttribute("open", "true");
                openingAnim(content).restart();
            }
        });
    });
}

const closingAnim = (content, element) => gsap.to(content, {
    height: 0,
    opacity: 0,
    duration: 0.4,
    ease: "power3.out",
    overwrite: true,
    onComplete: () => {
        element.removeAttribute("open");
    },
});

const openingAnim = (content) => gsap.fromTo(
    content, {
        height: 0,
        opacity: 0,
    }, {
        height: "auto",
        opacity: 1,
        duration: 0.4,
        ease: "power3.out",
        overwrite: true,
    });
