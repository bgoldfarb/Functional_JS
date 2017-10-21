
ProductDataAdapter.js



module.exports = function productDataLoader(cid, pid, vid, brand, locale, date) {
    domain = ('http://' + brandInfo.proxyDomainForApiCall(brand) + '/').replace(':previewDate:', (date || new Date()));



brands.js
'on': 'http://www.onol.wip.gidapps.com/preview/launch.do?date=:previewDate:&targetURL=http://www.onol.wip.gidapps.com',
'gap': 'http://www.gol.wip.gidapps.com/preview/launch.do?date=:previewDate:&targetURL=http://www.gol.wip.gidapps.com',
'at': 'http://www.atol.wip.gidapps.com/preview/launch.do?date=:previewDate:&targetURL=http://www.atol.wip.gidapps.com',
'br': 'http://www.brol.wip.gidapps.com/preview/launch.do?date=:previewDate:&targetURL=http://www.brol.wip.gidapps.com'