var mobile = false;
function esVistaMobil() {
    return /Mobi|Android/i.test(navigator.userAgent);
}

if (esVistaMobil()) {
 mobile = true;
} 


const app = new PIXI.Application({
    background: '#323232',
    //resizeTo: window,
    width: window.innerWidth*3,
    height: window.innerHeight*3,
    resolution: 1,
    antialias: true,
});
const container = new PIXI.Container();

// Load from any font file!
PIXI.Assets.addBundle('fonts', {
    grim: 'assets/font/grim.ttf',
});
PIXI.Assets.loadBundle('fonts').then(() =>
{
    var title;
    if(mobile){
        title= new PIXI.Text('Alexis Campos.', new PIXI.TextStyle({ fontFamily: 'grim', fontSize: 200, fill: ['#fefdcf'],  }));
        title.y = app.screen.height/2 - 899.96;
        
    }else{
        title = new PIXI.Text('Alexis Campos.', new PIXI.TextStyle({ fontFamily: 'grim', fontSize: 200, fill: ['#fefdcf'],  }));
        title.y = app.screen.height/2 - 1188.6;
    }
   
 

    title.x = app.screen.width / 2;
    
    title.anchor.set(0.5);
    
    
    app.stage.addChild(title);
});
const texture = PIXI.Texture.from('assets/img/tarot-web.png');
const profilePic = new PIXI.Sprite(texture);

//profilePic.scale = 1;

var scaleX = 0.7;
var scaleY = 0.7;

profilePic.x = app.screen.width / 2;
profilePic.y = app.screen.height / 2;
profilePic.anchor.set(0.5);
profilePic.cursor = 'pointer';
if(mobile){
    scaleX = 0.52
    scaleY = 0.52
}
profilePic.scale.set(scaleX, scaleY);
app.stage.addChild(profilePic);

document.body.appendChild(app.view);
const circle = app.stage.addChild(new PIXI.Graphics()
    .beginFill('#fefdcf')
    .lineStyle({ color: '#323232', alpha: 0.87, width: 5 })
    .drawCircle(0, 0, 80)
    .endFill());

circle.position.set(app.screen.width / 2, app.screen.height / 2);
// Inner radius of the circle
const radius = 100;

// The blur amount
const blurSize = 4;
circle.filters = [new PIXI.filters.BlurFilter(blurSize)];
// Enable interactivity!
app.stage.eventMode = 'static';

// Make sure the whole canvas area is interactive, not just the circle.
app.stage.hitArea = app.screen;

// Follow the pointer
app.stage.addEventListener('pointermove', (e) =>
{
    circle.position.copyFrom(e.global);
});
