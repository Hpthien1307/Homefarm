export default function FilterHandle(){
    const filterLabelsJob = $(".box-filter.ft-ob").find('.filter-check');
    const boxCheckOb = $('.box-filter.ft-ob .filter-check').find('input[type=checkbox]');
    filterLabelsJob.each(function(){
        filterLabelsJob.click(function(){
            const wasChecked = $(this).find('input[type=checkbox]').prop('checked');
            boxCheckOb.prop( "checked", false );
            $(this).find('input[type=checkbox]').prop("checked", (!wasChecked) ? true : false );
        })
    })

    const filterLabelEx = $(".box-filter.ft-ex").find('.filter-check');
    const boxCheckEx = $('.box-filter.ft-ex .filter-check').find('input[type=checkbox]');
    filterLabelEx.each(function(){
        filterLabelEx.click(function(){
            const wasChecked = $(this).find('input[type=checkbox]').prop('checked');
            boxCheckEx.prop( "checked", false );
            $(this).find('input[type=checkbox]').prop("checked", (!wasChecked) ? true : false );
        })
    })
    
}