$('.flag-contact').on('keyup paste', function() {
    var dial_code = $('.common_form .selected-dial-code').text();
    $('.dial_code').val(dial_code);
    var phone = $(this).val();
    if (phone.indexOf('0') === 0) {
        alert('Please do not start phone number with 0 (Zero)');
        $('.flag-contact').val('');
    }

    if ($(this).val().length > 4) {
        $('.btn-verify').show();
    } else {
        $('.btn-verify').hide();
    }
});

$('body').on('click', '.btn-verify', function() {
    $('.otp_field').html('');
    var dial_code_val = $('.selected-flag .selected-dial-code').text();
    $('.dial_code').val(dial_code_val);

    var phone = $('.flag-contact').val();
    $.ajax({
        type: "POST",
        url: 'flag-form-verification.php',
        data: {
            phone: phone,
            dial_code: dial_code_val
        },
        success: function(data) {
            $('.ajx_loader').hide();
            $('.enter_otp').show();
            $('#btn-verify').hide();
            $('.otp_field').html('<div class="enter_otp relative"><input type="number" name="otp" placeholder="Enter Verification Code" class="otp_value fb-form-control mt-2"> <span class="verify_otp verify">Verify</span></div><span class="btn-verify verify resend_link mb-3">Resend</span>');
        }
    });

});

$('body').on('click', '.verify_otp', function() {
    var otp_value = $('.otp_value').val();
    var dial_code_val = $('.selected-flag .selected-dial-code').text();
    var phone = $('.flag-contact').val();
    $.ajax({
        type: "POST",
        url: 'verify_otp.php',
        data: {
            otp: otp_value,
            phone: phone,
            dial_code: dial_code_val
        },
        success: function(data) {
            if (data.indexOf("Phone Number has been successfully verified") > -1) {
               $('.enter_otp').hide();
                //$('.btn-verify').text('✓ Verified');
                $('.btn-verify').hide();
                $('.verified').val('Yes');
                $('.fform-custom-btn').removeClass('disabled');
                $('.fform-custom-btn').prop("disabled", false);
            }
            alert(data);
        }
    });

});

$('.flag-contact_popup').on('keyup paste', function() {
    var dial_code = $('.popup_form .selected-dial-code').text();
    $('.dial_code_popup').val(dial_code);
    var phone = $(this).val();
    if (phone.indexOf('0') === 0) {
        alert('Please do not start phone number with 0 (Zero)');
        $('.flag-contact_popup').val('');
    }

    if ($(this).val().length > 4) {
        $('.btn-verify').show();
    } else {
        $('.btn-verify').hide();
    }
});