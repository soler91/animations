const Command = require('command');

module.exports = function animations(dispatch) {
    const command = Command(dispatch);
    
    let gameId = null;
    
    command.add('anim', (str) => {
            sendAnim(parseInt(str));
            command.message("Playing animation "+str);
	});
    
    dispatch.hook('S_LOGIN', 9, event => { ({gameId} = event) })
    
    function sendAnim(id){        
        dispatch.toClient('S_SOCIAL', 1, {
            target: gameId,
            animation: id,
            unk1: 0,
            unk2: 0
        })
    }
    
}