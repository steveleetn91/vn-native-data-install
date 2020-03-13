var cmd = require('node-cmd');
cmd.get('vn-native-watch-in',
function(err, data, stderr){
    if(err) {
        console.log('Watch server error : ',err);
    } else {
        console.log('Watch server running .. : ',data)
    }
    
});
cmd.get('vn-native-metro-server start',
function(err, data, stderr){
    if(err) {
        console.log('Metro server error : ',err);
    } else {
        console.log('Metro server running .. : ',data)
    }
});