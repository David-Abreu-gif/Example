// ---------------------------------------Boton de Menu
const $button_menu = $('#div_icon')
const $menu = $('#menu')
const $content = $('#content')

const $menu_profile = $('#profile')
const $menu_projects = $('#projects')
const $menu_mails = $('#mails')

$button_menu.click(function(){
  if ($menu[0].style.display != 'flex') {
    $content[0].style.filter = 'blur(3px)'
    $menu[0].style.display = 'flex'

  } else {
    $content[0].style.filter = 'blur(0px)'
    $menu[0].style.display = 'none'

  }
})
// -------------------Interacción del Menu
const $myprofile = $('#myprofile')
const $projects = $('#projects')
const $mails = $('#mails')

$menu.click(function(){
  let selec_element = event.srcElement.attributes[0].value
  element(selec_element)
})

function element(value){
  if (value === 'sel_profile') {
    $myprofile.css('display', 'grid')
    $projects.css('display', 'none')
    $mails.css('display', 'none')
    $menu[0].style.display = 'none'
    $content[0].style.filter = 'blur(0px)'

  } else {
    if (value === 'sel_projects') {
      $projects.css('display', 'block')
      $myprofile.css('display', 'none')
      $mails.css('display', 'none')
      $menu[0].style.display = 'none'
      $content[0].style.filter = 'blur(0px)'

    } else {
      if (value === 'sel_mails') {
        $mails.css('display', 'flex')
        $myprofile.css('display', 'none')
        $projects.css('display', 'none')
        $menu[0].style.display = 'none'
        $content[0].style.filter = 'blur(0px)'

      }
    }
  }
}

// ---------------------------------------Proyectos
const $img_projects = $('#projects img')
const $zoom_img = $('#zoom_img')
const $zoom_img_active = $('#zoom_img img')

const $z_01 = $('#z_01')
const $z_02 = $('#z_02')
const $z_03 = $('#z_03')
const $z_04 = $('#z_04')

$img_projects.click(function(){
  let selec_element = event.srcElement.attributes[0].value
  active_zoom(selec_element)
})

$zoom_img_active.click(function(){
  let selec_element = event.srcElement.attributes[0].value
  desactive_zoom(selec_element)
})

function active_zoom(value) {
  if (value === 'p_01') {
    $projects.hide()
    $zoom_img.css('display', 'flex')
    $z_01.css('display', 'block')

  } else {
    if (value === 'p_02') {
      $projects.hide()
      $zoom_img.css('display', 'flex')
      $z_02.css('display', 'block')

    } else {
      if (value === 'p_03') {
        $projects.hide()
        $zoom_img.css('display', 'flex')
        $z_03.css('display', 'block')

      } else {
        if (value === 'p_04') {
          $projects.hide()
          $zoom_img.css('display', 'flex')
          $z_04.css('display', 'block')
        }
      }
    }
  }
}

function desactive_zoom(value){
  if (value === 'z_01') {
    $z_01.css('display', 'none')
    $zoom_img.css('display', 'none')
    $projects.show()

  } else {
    if (value === 'z_02') {
      $z_02.css('display', 'none')
      $zoom_img.css('display', 'none')
      $projects.show()

    } else {
      if (value === 'z_03') {
        $z_03.css('display', 'none')
        $zoom_img.css('display', 'none')
        $projects.show()

      } else {
        if (value === 'z_04') {
          $z_04.css('display', 'none')
          $zoom_img.css('display', 'none')
          $projects.show()

        }
      }
    }
  }
}

// ---------------------------------------Contactos
const $gmail = $('#gmail')

$gmail.click(function () {
  window.open('mailto:roydavidabreu13@gmail.com');
})
