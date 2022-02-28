import waypoints from '../node_modules/waypoints/lib/noframework.waypoints';


// console.dir(document);

(function () {
    document.onmousemove = handleMouseMove;
    document.onmousewheel = handleMouseMove;

    function handleMouseMove(event) {
        var eventDoc, doc, body;

        event = event || window.event; // IE-ism

        // If pageX/Y aren't available and clientX/Y are,
        // calculate pageX/Y - logic taken from jQuery.
        // (This is to support old IE)
        if (event.pageX == null && event.clientX != null) {
            eventDoc = (event.target && event.target.ownerDocument) || document;
            doc = eventDoc.documentElement;
            body = eventDoc.body;

            event.pageX = event.clientX +
                (doc && doc.scrollLeft || body && body.scrollLeft || 0) -
                (doc && doc.clientLeft || body && body.clientLeft || 0);
            event.pageY = event.clientY +
                (doc && doc.scrollTop || body && body.scrollTop || 0) -
                (doc && doc.clientTop || body && body.clientTop || 0);

        }
        // console.log('mouse_x: ' + event.pageX, 'mouse_y: ' + event.pageY);

        move_cat(event.pageX, event.pageY, 80);
    }


    function move_cat(posX, posY, wiggle) {
        var money_cat = document.querySelector('.money-cat');

        // get the viewport width and height
        var w = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
        var h = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);

        // calculate the new position for element
        var output_x = (posX / w * 100) / 100 * wiggle;
        var output_h = (posY / h * 100) / 100 * wiggle;

        // place element in center of page, using half of viewport width
        output_x = w / 2 + output_x;

        // position the element
        // money_cat.style.left = output_x.toString() + "px";
        // money_cat.style.top = output_h.toString() + "px";

        money_cat.style.transform = "translate"
        // transition: transform 0.6s cubic-bezier(0.47, 0, 0.745, 0.715);
    }

})();

// var waypoint = new Waypoint({
//     element: document.getElementById('basic-waypoint'),
//     handler: function (direction) {
//         // console.log('--waypoint-- Basic waypoint triggered --waypoint-- ');
//         var element_id = this.element.id;
//         var trigger_point = this.triggerPoint;
//         console.log(element_id + ' triggered at ' + trigger_point);
//         console.log(waypoint);

//         /**
//          * adapter - useful for developers writing Waypoints extensions or scripts
//          */
//         // console.log(this.adapter);

//         /**
//          * context - gives you the instance of Waypoint.Context that the waypoint belongs to
//          */
//         // console.log(this.context.element);

//         /**
//          * element - property of a waypoint is its DOM element. With this property we gain access to that element within the handler.
//          */
//         // console.log(this.element);

//         /**
//          * group - gives you the instance of Waypoint.Group that the waypoint belongs to. This property should be the only way you access a group.
//          */
//         // console.log(this.group.name);

//         /**
//          * options - the result of merging the default options object with the options object passed in on instantiation. The properties of this object have little practical use inside a handler, but inspecting this object may be useful in debugging to ensure that the waypoint received the options you intended.
//          */
//         // console.log(this.options);

//         /**
//          * triggerpoint - is the result of the most recent offset calculation. It is the scroll value, in pixels, where the handler triggers. In the simplest example, when the offset is the default of 0, triggerPoint will be identical to the element's offset top.

//         You should never set the triggerPoint directly on a waypoint, but it is a useful property to inspect when debugging why a waypoint may not be triggering at the location you expect.
//          */
//         // console.log(this.triggerPoint);

//     },
//     offset: '50%',
// });