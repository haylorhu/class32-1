$(click).on('click',function(){
    $(popover).show()
    setTimeout(function(){
        $(document).on(
            'click',function(){
                $(popover).hide()

            }


        )        


    }
,0)


})

$(popover).on(
    'click',function(e){
        $(popover).show()
        e.stopPropagation()

    }
)
