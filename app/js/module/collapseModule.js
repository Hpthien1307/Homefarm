export default function collapseModule(){
    // $(document).ready(function(){
    //     $('.collapseBlock').each(function() {
    //         const block = $(this);
    //         const items = block.find('.collapseItem');
            
    //         Hiển thị nội dung của phần tử đầu tiên
    //         items.eq(0).find('.collapseContent').show();
    //         items.click(function(){
    //             items.removeClass('active')
    //             $(this).addClass('active');
    //             $(this).find('.collapseContent').stop().slideToggle();
    //         })
    //     });

    //     const cl_block = $('.collapseBlock')
    //     if(cl_block){
    //         const cl_item = $('.collapseItem');
    //         cl_item.eq(0).find('.collapseContent').show();
    //         cl_item.each(function(){
    //             $(this).click(function(){
    //                 cl_item.removeClass('active');
    //                 $(this).toggleClass('active');
    //                 $(this).find('.collapseContent').stop().slideToggle();
    //             })
    //         })
    //     }
    // })

    const clBlock = document.querySelectorAll(".collapseBlock");
    if (clBlock) {
        clBlock.forEach((item) => {
            const clBody = item.querySelectorAll('.collapseContent');
            const clItems = item.querySelectorAll('.collapseItem')
            if (clBody) {
                $(clBody[0]).slideDown();
                clBody[0].parentElement.classList.add("active");
            }
            if (clItems) {
                clItems.forEach(item => {
                    if (item.classList.contains('active')) {
                        const body = item.querySelector(".collapseContent")
                        $(body).slideDown();
                    }
                })
            }
            const head = item.querySelectorAll('.collapseHead');
            head.forEach(item => {
                item.addEventListener('click', () => {
                    clBody.forEach(item => {
                        $(item).slideUp();
                    })
                    clItems.forEach(item => {
                        $(item).removeClass("active");
                    })
                    const body = item.parentElement.querySelector(".collapseContent")
                    if (body.style.display == "none" || body.style.display == "") {
                        $(body).slideDown();
                        $(item.parentElement).addClass("active");
                    } else {
                        $(body).slideUp();
                        $(item.parentElement).removeClass("active");
                    }
                })
            })
        });
    }
}