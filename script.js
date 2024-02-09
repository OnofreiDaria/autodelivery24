let addedElements = [];
let elementNum = 1;
$(".add-car").click(function () {
  const codeToAddElement = `<div class="auto_type-block"><div class="auto_type-grid">
  
  <label class="radio-button-field w-radio"><div class="w-form-formradioinput w-form-formradioinput--inputType-custom radio-button w-radio-input"></div><input type="radio" id="hatchback-${elementNum}" name="car-type-${elementNum}" value="hatchback" required="" style="opacity:0;position:absolute;z-index:-1"><img src="https://assets-global.website-files.com/65797bdf14379f3327959880/65894fad94967e35ebeea154_Hatchbacks.svg" loading="lazy" alt="hatchback" class="auto_img"><span class="radio-button-label w-form-label" for="hatchback-${elementNum}">Hatchback</span></label>
  
  <label class="radio-button-field w-radio"><div class="w-form-formradioinput w-form-formradioinput--inputType-custom radio-button w-radio-input"></div><input type="radio" id="coupe-${elementNum}" name="car-type-${elementNum}" value="coupe" required="" style="opacity:0;position:absolute;z-index:-1"><img src="https://assets-global.website-files.com/65797bdf14379f3327959880/658950b56be41e89a3504504_coupe.svg" loading="lazy" alt="coupe" class="auto_img"><span class="radio-button-label w-form-label" for="coupe-${elementNum}">Coupe</span></label>
  
  <label class="radio-button-field w-radio"><div class="w-form-formradioinput w-form-formradioinput--inputType-custom radio-button w-radio-input"></div><input type="radio" id="sport-${elementNum}" name="car-type-${elementNum}" value="sport" required="" style="opacity:0;position:absolute;z-index:-1"><img src="https://assets-global.website-files.com/65797bdf14379f3327959880/65895247906486ea4344638a_spoet.svg" loading="lazy" alt="sport car" class="auto_img"><span class="radio-button-label w-form-label" for="sport-${elementNum}">Sport coupe</span></label>
  <label class="radio-button-field w-radio"><div class="w-form-formradioinput w-form-formradioinput--inputType-custom radio-button w-radio-input"></div><input type="radio" id="sedan-${elementNum}" name="car-type-${elementNum}" value="sedan" required="" style="opacity:0;position:absolute;z-index:-1"><img src="https://assets-global.website-files.com/65797bdf14379f3327959880/658952b60f6f5a17c52452e9_saloons.svg" loading="lazy" alt="saloon" class="auto_img"><span class="radio-button-label w-form-label" for="sedan-${elementNum}">Sedan</span></label>
  
  <label class="radio-button-field w-radio"><div class="w-form-formradioinput w-form-formradioinput--inputType-custom radio-button w-radio-input"></div><input type="radio" id="station-wagon-${elementNum}" name="car-type-${elementNum}" value="station-wagon" required="" style="opacity:0;position:absolute;z-index:-1"><img src="https://assets-global.website-files.com/65797bdf14379f3327959880/658953b8ad8b6fae510194b7_station%20offer.svg" loading="lazy" alt="station wagon" class="auto_img"><span class="radio-button-label w-form-label" for="station-wagon-${elementNum}">Station wagon</span></label>
  
  <label class="radio-button-field w-radio"><div class="w-form-formradioinput w-form-formradioinput--inputType-custom radio-button w-radio-input"></div><input type="radio" id="crossover-${elementNum}" name="car-type-${elementNum}" value="crossover" required="" style="opacity:0;position:absolute;z-index:-1"><img src="https://assets-global.website-files.com/65797bdf14379f3327959880/658953e9f416b93129f6520b_crossover.svg" loading="lazy" alt="crossover" class="auto_img"><span class="radio-button-label w-form-label" for="crossover-${elementNum}">Crossover</span></label>
  
  <label class="radio-button-field w-radio"><div class="w-form-formradioinput w-form-formradioinput--inputType-custom radio-button w-radio-input"></div><input type="radio" id="suv-${elementNum}" name="car-type-${elementNum}" value="suv" required="" style="opacity:0;position:absolute;z-index:-1"><img src="https://assets-global.website-files.com/65797bdf14379f3327959880/658950b5f3fc835901d0bb9d_suvs.svg" loading="lazy" alt="suv" class="auto_img"><span class="radio-button-label w-form-label" for="suv-${elementNum}">SUV</span></label>
  
  <label class="radio-button-field w-radio"><div class="w-form-formradioinput w-form-formradioinput--inputType-custom radio-button w-radio-input"></div><input type="radio" id="pickup-${elementNum}" name="car-type-${elementNum}" value="pickup" required="" style="opacity:0;position:absolute;z-index:-1"><img src="https://assets-global.website-files.com/65797bdf14379f3327959880/65894db64deb0f411282e00e_pickup.svg" loading="lazy" alt="pickup" class="auto_img"><span class="radio-button-label w-form-label" for="pickup-${elementNum}">Pickup</span></label>
  
  
  </div><div><input type="number" class="form-input w-input request_email_input" maxlength="256" name="quantity-${elementNum}" placeholder="Number of cars" id="quantity-${elementNum}" required=""><a href="#" class="btn_remove w-button">Remove</a></div></div>`;
 
  
  $(".car-type").append(codeToAddElement);
  addedElements.push(codeToAddElement);
  $(`[name="car-type-${elementNum}"]`).on("change",function(){
    const id_split = $(this).attr("id").split("-");
    updateCarEntries(id_split[id_split.length-1],$(this).val(),undefined);
  });
  $(`[id="quantity-${elementNum}"]`).on("change", function(){
    const id= $(this).attr("id").split("-")[1];
    updateCarEntries(id, undefined, $(this).val());
  });
  elementNum++;
});


$('.car-type').on('click', ".btn_remove", function() {
  const quantity_id = $(this).siblings(".form-input.w-input").attr("id");
  const id = quantity_id.split("-")[1];
  removeCarEntry(id);
  $(this).closest(".auto_type-block").remove();
});
