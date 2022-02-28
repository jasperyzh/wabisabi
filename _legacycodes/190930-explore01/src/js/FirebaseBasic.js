import waypoints from '../../node_modules/waypoints/lib/noframework.waypoints';

(function () {
  let html_waypoints = `
  <div style="height: 3000px; background-color: #aaa">
		start
	</div>
	<div id="basic-waypoint" style="height: 1000px">
		trigger waypoints
	</div>
	<div style="height: 3000px; background-color: #aaa">
		end
	</div>
	<div class="sidebar-table">
	</div>
  `;

  document.body.innerHTML += html_waypoints;
})();


function change_color(color) {
  let sidebar_table = document.querySelector('.sidebar-table');
  sidebar_table.style.backgroundColor = color;
}
var waypoint = new Waypoint({
  element: document.getElementById('basic-waypoint'),
  handler: function (direction) {
    // console.log('--waypoint-- Basic waypoint triggered --waypoint-- ');
    var element_id = this.element.id;
    var trigger_point = this.triggerPoint;
    console.log(element_id + ' triggered at ' + trigger_point);
    console.log(direction);


    if (direction == 'down') {
      change_color('red');
    } else if (direction == 'up') {
      change_color('goldenrod');
    }

    /**
     * adapter - useful for developers writing Waypoints extensions or scripts
     */
    // console.log(this.adapter);

    /**
     * context - gives you the instance of Waypoint.Context that the waypoint belongs to
     */
    // console.log(this.context.element);

    /**
     * element - property of a waypoint is its DOM element. With this property we gain access to that element within the handler.
     */
    // console.log(this.element);

    /**
     * group - gives you the instance of Waypoint.Group that the waypoint belongs to. This property should be the only way you access a group.
     */
    // console.log(this.group.name);

    /**
     * options - the result of merging the default options object with the options object passed in on instantiation. The properties of this object have little practical use inside a handler, but inspecting this object may be useful in debugging to ensure that the waypoint received the options you intended.
     */
    // console.log(this.options);

    /**
     * triggerpoint - is the result of the most recent offset calculation. It is the scroll value, in pixels, where the handler triggers. In the simplest example, when the offset is the default of 0, triggerPoint will be identical to the element's offset top.

    You should never set the triggerPoint directly on a waypoint, but it is a useful property to inspect when debugging why a waypoint may not be triggering at the location you expect.
     */
    // console.log(this.triggerPoint);

  },
  offset: '10%',
});