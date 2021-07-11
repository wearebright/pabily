@extends("admin.layouts.master")
@section("title")
Delivery Registration
@endsection
@section("content")
<style>
    .btn-registerBtn {
        background-color: #ffffff;
        color: #2b2b2b;
        border-radius: 4px;
        transition: 0.2s linear all !important;
        border: 1px solid #c2c2c2;
        transition: 0.2s linear all !important;
    }
    .btn-registerBtn:hover {
        background-color: #f7f2ff !important;
        color: #2b2b2b;
        transition: 0.2s linear all !important;
        border-color: transparent;
    }
    .text-danger {
    	color: #fe784d !important;
    }
    .delivery-msg {
        background-color: #ffffff;
        color: #2b2b2b;
        border-radius: 0.175rem;
        box-shadow: 0 3px 12px 2px rgba(0,0,0,.05);
    }
    .captcha-code > img {
    	border-radius: 4px;
    }
    .registration-form {
    	min-width: 370px;
    }
    @media (min-width: 320px) and (max-width: 767px) { 
	      .registration-form {
	    	min-width: 100%;
	    } 
    }
</style>
 <form class="registration-form py-5 @if(Session::has('delivery_register_message')) hidden @endif" action="{{ route('registerRestaurantDelivery') }}" method="POST" id="regForm" style="margin: 0 auto 20px auto;">
    <div class="card mb-0">
        <div class="card-body">
            <div class="text-center mb-3">
                <span id="regIcon">
                     <i class='icon-truck icon-2x text-slate-300 border-slate-300 border-3 rounded-round p-3 mb-3 mt-1'></i>
                </span>
                <h5 class="mb-0">Registration for Delivery Partner</h5>
                <span class="d-block text-muted">Please fill the form to register</span>
            </div>
            <div class="form-group form-group-feedback form-group-feedback-left">
                <input type="text" class="form-control" placeholder="Full Name" name="name" required="required" value="{{ old('name') }}">
                <div class="form-control-feedback">
                    <i class="icon-user text-muted"></i>
                </div>
                {!! $errors->first('name', '<p class="text-danger small">:message</p>') !!}
            </div>

            <div class="form-group form-group-feedback form-group-feedback-left">
                <input type="email" class="form-control" placeholder="Email" name="email" required="required" value="{{ old('email') }}">
                <div class="form-control-feedback">
                    <i class="icon-mail5 text-muted"></i>
                </div>
                {!! $errors->first('email', '<p class="text-danger small">:message</p>') !!}
            </div>

            <div class="form-group form-group-feedback form-group-feedback-left">
                <input type="number" class="form-control" placeholder="Phone number" name="phone" min="8" required="required" value="{{ old('phone') }}">
                <div class="form-control-feedback">
                    <i class="icon-mobile text-muted"></i>
                </div>
                {!! $errors->first('phone', '<p class="text-danger small">:message</p>') !!}
            </div>

            <div class="form-group form-group-feedback form-group-feedback-left">
                <input type="password" class="form-control" placeholder="Password" name="password" required="required">
                <div class="form-control-feedback">
                    <i class="icon-lock2 text-muted"></i>
                </div>
                {!! $errors->first('password', '<p class="text-danger small">:message</p>') !!}
            </div>
            <div class="captcha-code mb-2">
            	{!! captcha_img('flat') !!}
            </div>

            <div class="form-group form-group-feedback form-group-feedback-left">
            <input type="text" class="form-control" placeholder="Enter Captcha" name="captcha" required="required">
                <div class="form-control-feedback">
                    <i class="icon-font-size text-muted"></i>
                </div>
                {!! $errors->first('captcha', '<p class="text-danger small">:message</p>') !!}
            </div>
            <input type="hidden" name="role" id="roleValue" value="DELIVERY">
            @csrf
            <div class="form-group">
                <button type="submit" class="btn btn-primary btn-block" style="height: 2.8rem; font-size: 1rem;">Register <i
                    class="icon-circle-right2 ml-2"></i></button>
            </div>
        </div>
    </div>
</form>


@if(Session::has('delivery_register_message'))
<div class="d-flex justify-content-center align-items-center" style="margin-top: 8rem;">
     <div class="delivery-msg p-3 text-center">
     	<b>Delivery Partner Registration Successful.</b><br>
     	You can now login to the delivery application using your phone.
     	<br>
     	Goto: <a href="https://{{ request()->getHttpHost() }}/delivery"><b>{{ request()->getHttpHost() }}/delivery</b></a> on your phone. 
 	</div>
</div>
@endif



@endsection