/*
made by : kavin kumar. B aka rbkavin
website: https://rbkavin.in
ig : https://instagram.com/rbkavin
*/
const s = require("Scene");
const a = require("Animation");
const d = require("Diagnostics");
const ti = require("Time");

Promise.all([
    s.root.findAll("Basketball")
    ]).then( function(result){
var basketball=result[0];

//degree to rad

function degtorad(i){
    return i*Math.PI/180;
}

// position
// basketball.transform.x = 0;
// basketball.transform.y = 0;
// basketball.transform.z = 0;

//rotation 
// basketball.transform.rotationX = degtorad(0);
// basketball.transform.rotationY = degtorad(0);
// basketball.transform.rotationZ = degtorad(0);

//scale
// basketball.transform.scaleX = .3;
// basketball.transform.scaleY = .3;
// basketball.transform.scaleZ = .3;



function animate(){
    const driver = a.timeDriver({ durationMilliseconds: 3000, loopCount: Infinity, mirror: true });

    const samplery = a.samplers.polybezier({ keyframes: [0,0.11814,0.20763,0.16109,0.08234,0.00716,-0.03222,0.02148,0.16519,0.27132,0.20755,0.05449,-0.03069,0.08681,0.15816,0.13299,0.06295,-0.02747] });
    const samplerz = a.samplers.polybezier({ keyframes: [0.93611,0.90389,0.86452,0.78218,0.73922,0.70342,0.66046,0.61035,0.32407,0.13882,0.03441,-0.0811,-0.2609,-0.37639,-0.56976,-0.71538,-0.95169,-0.99689] });


    basketball.transform.y = a.animate(driver, samplery);
    basketball.transform.z = a.animate(driver, samplerz);

    driver.start();
    ti.setTimeout(() => {
    driver.stop();
            // driver.reset();

    d.log("stop")

        ti.setTimeout(
            ()=>{
            driver.reverse();
    //         // driver.reset();

    //         d.log("reverse")
            }
            ,3500);
    }, 3500);
}
animate();

});
