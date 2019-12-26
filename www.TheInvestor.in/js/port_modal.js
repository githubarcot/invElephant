$(function() {

    $('.butt_images a').click(function() {
        var project_over = createModal($(this));

        $.blockUI({
            message: project_over,
            css: {
                width: '719px',
                height: '584px',
                left: '50%',
                marginLeft: '-360px',
                top: '50%',
                marginTop: '-292px',
                cursor: 'default',
                border: 'none'
            },
            overlayCSS: {
                cursor: 'default'
            }
        });

        $('.cycle').cycle({
            fx: 'scrollVert',
            timeout: 0,
            next: $('.arrow_sidecar_down a'),
            prev: $('.arrow_sidecar_up a'),
            easing: 'easeOutExpo'
        });

        return false;
    });

});

function createModal(a) {
    var project_over = $('<div></div>');
    project_over.addClass('project_over');
    
    var project_over_top = $('<div></div>');
    project_over_top.addClass('project_over_top');
    
    var project_over_left = $('<div></div>');
    project_over_left.addClass('project_over_left');
    
    var project_over_right = $('<div></div>');
    project_over_right.addClass('project_over_right');
    
    var project_over_bottom = $('<div></div>');
    project_over_bottom.addClass('project_over_bottom');
    
    var blue_sidecar = $('<div></div>');
    blue_sidecar.addClass('blue_sidecar');
    
    var arrow_sidecar_wrapper = $('<div></div>');
    arrow_sidecar_wrapper.addClass('arrow_sidecar_wrapper');
    
    var arrow_sidecar_up = $('<div></div>');
    arrow_sidecar_up.addClass('arrow_sidecar_up');
    
    var arrow_sidecar_down = $('<div></div>');
    arrow_sidecar_down.addClass('arrow_sidecar_down');
    
    var butt_close = $('<div></div>');
    butt_close.addClass('butt_close');

    var cycle = $('<div></div>');
    cycle.addClass('cycle');

    var butt_close_a = $('<a></a>');
    butt_close.append(butt_close_a);
    
    var arrow_sidecar_up_a = $('<a></a>');
    arrow_sidecar_up.append(arrow_sidecar_up_a);
    
    var arrow_sidecar_down_a = $('<a></a>');
    arrow_sidecar_down.append(arrow_sidecar_down_a);

    project_over.append(project_over_top)
        .append(project_over_left)
        .append(project_over_right)
        .append(project_over_bottom)
        .append(blue_sidecar)
        .append(butt_close)
        .append(cycle);

    blue_sidecar.append(arrow_sidecar_wrapper);

    arrow_sidecar_wrapper.append(arrow_sidecar_up)
        .append(arrow_sidecar_down);

    butt_close.click($.unblockUI).css('z-index', '20');

    cycle.append($(a.attr('href')).html());
    
    project_over.append(cycle);

    cycle.css({
        height: '585px',
        width: '720px',
        overflow: 'hidden'
    });

    return project_over;
}