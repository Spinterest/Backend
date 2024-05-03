delete from CommentLikes;
delete from SpinLikes;
delete from SpinTags;
delete from Tag;
delete from WebSpins;
delete from SpinComment;
delete from Web;
delete from Spin;
delete from Crawler;

do $$
	declare
		/* userIDs */
		abdulUserID int;
		cameronUserID int;
		katlegoUserID int;
		rotendaUserID int;
		
		/* pinIDs */
		greenSnakeID int;
		blackWidowID int;
		greenBirdID int;
		whiteOwlID int;
		hedgehogID int;
		peakokID int;
		crocodileID int;
		flamingoID int;
		elephantID int;
		slothID int;
		greenFrogID int;
		redFrogID int;
		
		/* webIDs */
		venomouswebID int;
		carnivorewebID int;
		vegetarianwebID int;
		aveswebID int;
		
		/* TagIDs */
		animalTagID int;
		mammalTagID int;
		amphibianTagID int;
		insectaTagID int;
		avesTagID int;
		reptileTagID int;
		carnivoreTagID int;
		vegetarianTagID int;
		
		/* commentIDs */
		katlegoFlamingoCommentID int;
		cameronFlamingoCommentID int;
		rotendaFlamingoCommentID int;
		abdulFlamingoCommentID int;
		cameronCrocodileCommentID int;
		rotendaCrocodileCommentID int;
		abdulCrocodileCommentID int;
		rotendaGreenSnakeCommentID int;
		abdulGreenSnakeCommentID int;
		abdulBlackWidowCommentID int;
	begin
		-- Adding users
		insert into 
			Crawler (crawlerEmail, crawlerUserName) 
		values 
			('abdul.osman@bbd.co.za', 'abdul'),
			('cameron.zwane@bbd.co.za', 'cameron'),
			('katlego.kungoane@bbd.co.za', 'katlego'),
			('rotenda.mantsha@bbd.co.za', 'rotenda');


		-- Getting user IDs
		select crawlerID into abdulUserID from Crawler where crawlerEmail = 'abdul.osman@bbd.co.za';
		select crawlerID into cameronUserID from Crawler where crawlerEmail = 'cameron.zwane@bbd.co.za';
		select crawlerID into katlegoUserID from Crawler where crawlerEmail = 'katlego.kungoane@bbd.co.za';
		select crawlerID into rotendaUserID from Crawler where crawlerEmail = 'rotenda.mantsha@bbd.co.za';

		-- Adding pins, you can get from imgur.
		insert into 
			Spin (crawlerID, spinLink) 
		values
			(rotendaUserID, 'https://i.imgur.com/inWNK04.jpg'),
			(rotendaUserID, 'https://i.imgur.com/nsLnAmo.jpg'),
			(rotendaUserID, 'https://i.imgur.com/V1Qvsjp.jpg'),
			(cameronUserID, 'https://i.imgur.com/zQDlAl2.jpg'),
			(cameronUserID, 'https://i.imgur.com/YYZ2wGL.jpg'),
			(cameronUserID, 'https://i.imgur.com/uUtzbjT.jpg'),
			(cameronUserID, 'https://i.imgur.com/ZGkslVN.jpg'),
			(cameronUserID, 'https://i.imgur.com/mIbkYY3.jpg'),
			(katlegoUserID, 'https://i.imgur.com/0xeeupu.jpg'),
			(katlegoUserID, 'https://i.imgur.com/lzD8xlY.jpg'),
			(katlegoUserID, 'https://i.imgur.com/hmmcp6t.jpg'),
			(katlegoUserID, 'https://i.imgur.com/H18fW4x.jpg'),
			(katlegoUserID, 'https://i.imgur.com/9aSvg5U.jpg'),
			(abdulUserID, 'https://i.imgur.com/oyruWKE.jpg'),
			(abdulUserID, 'https://i.imgur.com/9xOOY3k.jpg'),
			(abdulUserID, 'https://i.imgur.com/oubQukK.jpg'),
			(abdulUserID, 'https://i.imgur.com/faautEE.jpg'),
			(abdulUserID, 'https://i.imgur.com/NMGnMU2.jpg');

		-- Getting pinIDs
		select spinID into greenSnakeID from Spin where spinLink = 'https://i.imgur.com/9xOOY3k.jpg';
		select spinID into blackWidowID from Spin where spinLink = 'https://i.imgur.com/inWNK04.jpg';
		select spinID into greenBirdID from Spin where spinLink = 'https://i.imgur.com/oubQukK.jpg';
		select spinID into whiteOwlID from Spin where spinLink = 'https://i.imgur.com/YYZ2wGL.jpg';
		select spinID into hedgehogID from Spin where spinLink = 'https://i.imgur.com/ZGkslVN.jpg';
		select spinID into peakokID from Spin where spinLink = 'https://i.imgur.com/mIbkYY3.jpg';
		select spinID into crocodileID from Spin where spinLink = 'https://i.imgur.com/zQDlAl2.jpg';
		select spinID into flamingoID from Spin where spinLink = 'https://i.imgur.com/0xeeupu.jpg';
		select spinID into elephantID from Spin where spinLink = 'https://i.imgur.com/uUtzbjT.jpg';
		select spinID into slothID from Spin where spinLink = 'https://i.imgur.com/NMGnMU2.jpg';
		select spinID into greenFrogID from Spin where spinLink = 'https://i.imgur.com/faautEE.jpg';
		select spinID into redFrogID from Spin where spinLink = 'https://i.imgur.com/9aSvg5U.jpg';

		-- Creating Boards
		insert into 
			Web (crawlerID, webTitle) 
		values 
			(rotendaUserID, 'Venomous'),
			(katlegoUserID, 'Carnivore'),
			(cameronUserID, 'Vegetarian'),
			(abdulUserID, 'Arially Inclidened');

		-- Getting webIDs
		select webID into venomouswebID from Web where webTitle = 'Venomous';
		select webID into carnivorewebID from Web where webTitle = 'Carnivore';
		select webID into vegetarianwebID from Web where webTitle = 'Vegetarian';
		select webID into aveswebID from Web where webTitle = 'Arially Inclidened';

		-- Adding pins to boards
		insert into 
			WebSpins (webID, spinID) 
		values 
			(venomouswebID, blackWidowID),
			(venomouswebID, greenSnakeID),
			(carnivorewebID, crocodileID),
			(carnivorewebID, flamingoID),
			(vegetarianwebID, hedgehogID),
			(vegetarianwebID, peakokID),
			(aveswebID, greenBirdID),
			(aveswebID, whiteOwlID);

		-- Creating Tags
		insert into 
			Tag (tagName) 
		values 
			('animal'),
			('mammal'),
			('amphibian'),
			('insecta'),
			('aves'),
			('reptile'),
			('carnivore'),
			('vegetarian');

		-- Getting tagIDs
		select tagID into animalTagID from Tag where tagName = 'animal';
		select tagID into mammalTagID from Tag where tagName = 'mammal';
		select tagID into amphibianTagID from Tag where tagName = 'amphibian';
		select tagID into insectaTagID from Tag where tagName = 'insecta';
		select tagID into avesTagID from Tag where tagName = 'aves';
		select tagID into reptileTagID from Tag where tagName = 'reptile';
		select tagID into carnivoreTagID from Tag where tagName = 'carnivore';
		select tagID into vegetarianTagID from Tag where tagName = 'vegetarian';

		-- Adding SpinTags
		insert into 
			SpinTags (spinID, tagID) 
		values
			(elephantID, animalTagID),
			(elephantID, mammalTagID),
			(elephantID, vegetarianTagID),
			(slothID, animalTagID),
			(slothID, mammalTagID),
			(slothID, vegetarianTagID),
			(greenFrogID, animalTagID),
			(greenFrogID, amphibianTagID),
			(greenFrogID, vegetarianTagID),
			(redFrogID, animalTagID),
			(redFrogID, amphibianTagID),
			(redFrogID, carnivoreTagID),
			(blackWidowID, animalTagID),
			(blackWidowID, insectaTagID),
			(blackWidowID, carnivoreTagID),
			(flamingoID, animalTagID),
			(flamingoID, avesTagID),
			(flamingoID, carnivoreTagID),
			(greenBirdID, animalTagID),
			(greenBirdID, avesTagID),
			(greenBirdID, vegetarianTagID),
			(crocodileID, animalTagID),
			(crocodileID, reptileTagID),
			(crocodileID, carnivoreTagID),
			(greenSnakeID, animalTagID),
			(greenSnakeID, reptileTagID),
			(greenSnakeID, carnivoreTagID);

		-- Adding Spin Likes
		insert into 
			SpinLikes (crawlerID, spinID) 
		values
			(katlegoUserID, flamingoID),
			(cameronUserID, flamingoID),
			(rotendaUserID, flamingoID),
			(abdulUserID, flamingoID),
			(cameronUserID, crocodileID),
			(rotendaUserID, crocodileID),
			(abdulUserID, crocodileID),
			(rotendaUserID, greenSnakeID),
			(abdulUserID, greenSnakeID),
			(abdulUserID, blackWidowID);

		-- Adding Spin Comments
		insert into 
			SpinComment (crawlerID, spinID, spinCommentMessage) 
		values 
			(katlegoUserID, flamingoID, 'First Comment'),
			(cameronUserID, flamingoID, 'This is a cool flamingo'),
			(rotendaUserID, flamingoID, 'Who said this was a carnivore!?'),
			(abdulUserID, flamingoID, 'How do I go back to the home page?'),
			(cameronUserID, crocodileID, 'What a cute little river pupper'),
			(rotendaUserID, crocodileID, '@Cameron, you are buggin! THATS NO PUPPER'),
			(abdulUserID, crocodileID, 'Guys... I forgot... Home page, please :('),
			(rotendaUserID, greenSnakeID, 'We dont get many of these in South Africa'),
			(abdulUserID, greenSnakeID, 'FOUND THE HOME PAGE'),
			(abdulUserID, blackWidowID, 'If I find you in my house!? Its just your house');

		-- Getting comment IDs
		select spinCommentID into katlegoFlamingoCommentID from SpinComment where spinCommentMessage = 'First Comment';
		select spinCommentID into cameronFlamingoCommentID from SpinComment where spinCommentMessage = 'This is a cool flamingo';
		select spinCommentID into rotendaFlamingoCommentID from SpinComment where spinCommentMessage = 'Who said this was a carnivore!?';
		select spinCommentID into abdulFlamingoCommentID from SpinComment where spinCommentMessage = 'How do I go back to the home page?';
		select spinCommentID into cameronCrocodileCommentID from SpinComment where spinCommentMessage = 'What a cute little river pupper';
		select spinCommentID into rotendaCrocodileCommentID from SpinComment where spinCommentMessage = '@Cameron, you are buggin! THATS NO PUPPER';
		select spinCommentID into abdulCrocodileCommentID from SpinComment where spinCommentMessage = 'Guys... I forgot... Home page, please :(';
		select spinCommentID into rotendaGreenSnakeCommentID from SpinComment where spinCommentMessage = 'We dont get many of these in South Africa';
		select spinCommentID into abdulGreenSnakeCommentID from SpinComment where spinCommentMessage = 'FOUND THE HOME PAGE';
		select spinCommentID into abdulBlackWidowCommentID from SpinComment where spinCommentMessage = 'If I find you in my house!? Its just your house';

		-- Adding Comment likes
		insert into 
			CommentLikes (spinCommentID, crawlerID) 
		values 
			(katlegoFlamingoCommentID, katlegoUserID),
			(katlegoFlamingoCommentID, cameronUserID),
			(katlegoFlamingoCommentID, rotendaUserID),
			(katlegoFlamingoCommentID, abdulUserID),
			(rotendaFlamingoCommentID, katlegoUserID),
			(rotendaFlamingoCommentID, cameronUserID);
	end;
$$;