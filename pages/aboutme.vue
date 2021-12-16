<template>
	<div>
		<DarkHeader>
			<h1 class="text-white">Over mij</h1>
			<h2 class="text-white font-semibold text-3xl my-4">Gedreven door creativiteit</h2>
			<p class="text-gray-400 max-w-lg">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
		</DarkHeader>
		<section class="h-64 w-full -mt-16">
			<Container>
				<div class="w-full bg-primary h-64 flex items-center justify-center px-4">
					<h2 class="text-gray-700 font-semibold text-2xl text-center">Mijn naam is Martijn van Driest. Ik ben 19 jaar oud</h2>
				</div>
			</Container>
		</section>
		<section class="my-24">
			<Container>
				<div class="grid grid-cols-1 md:grid-cols-2 gap-3">
					<div>
						<h3 class="font-semibold text-xl mb-3">Hoe ik ben gestart</h3>
						<p class="text-gray-700">Ik beoefen dit vak voor ongeveer 5 jaar met veel plezier. Ik ben altijd geïnteresseerd geweest in Design. Ik ben begonnen met het helpen van mensen voor social media posts. Sind dien begon ik te groeien tot een hoger niveau en wist ik dat dit mijn baan zou worden later.</p>
					</div>
					<div>
						<h3 class="font-semibold text-xl mb-3">Mijn specialiteiten</h3>
						<p class="text-gray-700">Mijn best specialiteit is dat ik snel kan leren en dat ik daardoor beter ideëen kan uitwerken. Ik heb bijvoorbeeld 3 Adobe programma's in 2 jaar geleerd zonder enige voorkennis. Zo kwam ik erachter dat dit echt mijn passie is. Het belangrijkste is dat het idee er is.</p>
					</div>
				</div>
			</Container>
		</section>
		<section class="mb-24">
			<Container>
				<div class="grid grid-cols-1 lg:grid-cols-2">
					<div class="bg-dark text-white px-16 py-12">
						<h2 class="font-semibold text-3xl mb-11">Leuke feitjes</h2>
						<ul class="space-y-7">
							<li><Fact icon="run">Gaat tot het uiterste</Fact></li>
							<li><Fact icon="coffee">Houdt van lekkere koffie!</Fact></li>
							<li><Fact icon="football">Voetbal is mijn favoriete sport</Fact></li>
							<li><Fact icon="tennis">Ik speel regelmatig tennis</Fact></li>
							<li><Fact icon="design">Design is mijn passie</Fact></li>
						</ul>
					</div>
					<div>
						<img src="~/assets/images/martijn.png" alt="Martijn van Driest" class="w-full h-full object-cover"/>
					</div>
				</div>
			</Container>
		</section>
		<Footer/>
	</div>
</template>