<template>
	<div>
		<!-- https://formspree.io/f/meqnqqyw POST {email: "test@test.nl", message: "blablabla"} -->
		<div>
		<header class="max-h-screen h-[32rem] w-full">
			<Navbar dark/>
			<img src="~/assets/images/contact-coffee.jpg" alt="Coffee" class="w-full h-full object-cover">
		</header>
		<section class="-mt-64 md:-mt-36 mb-16 z-10 relative">
			<Container>
				<div class="bg-white rounded-md py-12 px-8 md:px-20 shadow-md">
					<p>{{$t('CONTACT.MAKE_CONTACT')}}</p>
					<h2 class="font-semibold text-2xl md:text-3xl max-w-md mb-7 mt-5">{{$t('CONTACT.MAKE_CONTACT_LONG')}}</h2>
					<Alert v-if="successMessage" class="mb-5" type="success">{{successMessage}}</Alert>
					<Alert v-if="error-messages" class="mb-5" type="error">{{errorMessage}}</Alert>
					<form class="space-y-5" @submit.prevent="sendMail()">
						<div>
							<label for="email-input-field" class="block mb-1">{{$t('CONTACT.EMAIL_LABEL')}}</label>
							<input id="email-input-field" v-model="contactInfo.email" type="text" name="Email" placeholder="email@email.com" autocomplete="email" required class="block border-gray-200 border w-full p-2 rounded-md">
						</div>
						<div>
							<label for="message-input-field" class="block mb-1">{{$t('CONTACT.MESSAGE_LABEL')}}</label>
							<textarea id="message-input-field" v-model="contactInfo.message" type="textarea" name="Message" :placeholder="$t('CONTACT.MESSAGE_PLACEHOLDER')" required  class="block border-gray-200 border w-full p-2 rounded-md"/>
						</div>
						<button class="bg-dark text-primary font-medium rounded-md py-3 px-8" type="submit">{{$t('CONTACT.SEND')}}</button>
					</form>
				</div>
			</Container>
		</section>
		<Footer />
	</div>
	</div>
</template>

<script>
export default {
	data() {
		return {
			contactInfo: {
				email: '',
				message: ''
			},
			successMessage: '',
			errorMessage: '',
		}
	},
	methods: {
		async sendMail() {
			try {
				if(this.contactInfo.email && this.contactInfo.message) {
					const response = await fetch('https://formspree.io/f/meqnqqyw', {
						method: 'POST',
						headers: {
							'Content-Type': 'application/json'
						},
						body: JSON.stringify(this.contactInfo)
					})
					if(response.status === 200) {
						this.successMessage = this.$t('CONTACT.SUCCESS')
						this.errorMessage = ''
						this.contactInfo.email = ''
						this.contactInfo.message = ''
					}else {
						this.successMessage = '';
						this.errorMessage = this.$t('CONTACT.ERROR');
					}
				}
			}catch(ex) {
				this.successMessage = '';
				this.errorMessage = this.$t('CONTACT.ERROR');
			}
		}
	}
}
</script>