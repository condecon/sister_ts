export class Sister{
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    public events:any = {};

    /**
     * 
     * @param name Event name.
     * @param handler 
     * @returns 
     */
    public on(name:string, handler:object){
        const listener = {name: name, handler: handler};
        this.events[name] = this.events[name] || [];
        this.events[name].unshift(listener);
        return listener;
    }

    /**
     * @param listener
     */

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    public off(listener:any){
        const index = this.events[listener.name].indexOf(listener);

        if (index !== -1) {
            this.events[listener.name].splice(index, 1);
        }
    }

    /**
     * 
     * @param name Event name.
     * @param data Event data.
     */
    public trigger(name:string, data:object){
        // eslint-disable-next-line no-var
        var listeners = this.events[name],
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            i:any;

        if (listeners) {
            i = listeners.length;
            while (i--) {
                listeners[i].handler(data);
            }
        }
    }
}