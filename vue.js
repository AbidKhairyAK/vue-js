// Daftar Component

var inputFarid = {
	template: `
		<div class="input-group mb-3">	
	    <div class="input-group-prepend">
	      <span class="input-group-text"> {{ judul }} </span>
	    </div>
	    <input type="text" class="form-control" :placeholder="petunjuk">
	  </div>
	`,
	props: ['judul', 'petunjuk']
};

var alert = {
	template: `
		<div :class=" 'alert alert-' + warna ">
		  {{ judul }}
		</div>
	`,
	props: ['judul', 'warna']
};

new Vue({
	el: "#app",
	components: {
		"input-farid" : inputFarid,
		"alert" : alert,
	}
});