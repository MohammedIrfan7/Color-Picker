let colorIndicator=document.getElementById('color-indicator')
var colorpicker=iro.ColorPicker("#color-picker",{
    width:100,color:"#fff"
})
colorpicker.on('color:change',function (color){
    colorIndicator.style.backgroundColor=color.hexString;
})