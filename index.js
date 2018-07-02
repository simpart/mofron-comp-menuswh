/**
 * @file   mofron-comp-menuswitch/index.js
 * @author simpart
 */
let mf = require('mofron');
let Switch = require('mofron-comp-visiswh');
let Focus = require('mofron-event-focus');

/**
 * @class mofron.comp.MenuSwitch
 * @brief menu switch component for mofron
 */
mf.comp.MenuSwh = class extends Switch {
    
    constructor (po, p2) {
        try {
            super();
            this.name('MenuSwh');
            this.prmOpt(po, p2);
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    switch (prm) {
        try {
            let evt = (flg, swh, mns) => {
                try {
                    mns.status(flg);
                } catch (e) {
                    console.error(e.stack);
                    throw e;
                }
            };
            if (undefined !== prm) {
                prm.addEvent(new Focus(evt, this));
            }
            return super.switch(prm);
        } catch (e) {
            
        }
    }
    
    menu (prm) {
        try {
            return this.swhTarget(prm);
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
}
module.exports = mofron.comp.MenuSwh;
/* end of file */
