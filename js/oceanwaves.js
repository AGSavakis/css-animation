// JavaScript Document
$(document).ready(function(){

	$('#sky1').pan({fps: 30, depth: 70, dir: 'left'});
	$('#sky2').pan({fps: 30, depth: 35, dir: 'left'});
	$('#sky3').pan({fps: 30, depth: 10, dir: 'left'});
	$('#bluewave').pan({fps: 30, depth: 40, dir: 'left'});
	$('#bluewave2').pan({fps: 30, depth:10, dir: 'left'});

	$('#sky1, #sky2, #sky3, #bluewave, #bluewave2').spRelSpeed(1);

	$('#boat').sprite({fps:3, no_of_frames:2 })
	      .spRandom({
          top: 130,
          left: 400,
          right: 500,
          bottom: 150,
          speed: 1000,
          pause: 1000
      });

	$('#dolphin').sprite({fps:3, no_of_frames:6 })
	$('#dolphin2').sprite({fps:4, no_of_frames:6 })
	$('#dolphin3').sprite({fps:5, no_of_frames:6 })
	});
