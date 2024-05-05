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
			Crawler (crawlerID, crawlerEmail, crawlerUserName) 
		values 
			(1, 'abdul.osman@bbd.co.za', 'abdul'),
			(2, 'cameron.zwane@bbd.co.za', 'cameron'),
			(3, 'katlego.kungoane@bbd.co.za', 'katlego'),
			(4, 'rotenda.mantsha@bbd.co.za', 'rotenda');


		-- Getting user IDs
		select crawlerID into abdulUserID from Crawler where crawlerEmail = 'abdul.osman@bbd.co.za';
		select crawlerID into cameronUserID from Crawler where crawlerEmail = 'cameron.zwane@bbd.co.za';
		select crawlerID into katlegoUserID from Crawler where crawlerEmail = 'katlego.kungoane@bbd.co.za';
		select crawlerID into rotendaUserID from Crawler where crawlerEmail = 'rotenda.mantsha@bbd.co.za';

		-- Adding pins, you can get from imgur.
		insert into 
			Spin (spinID, crawlerID, spinLink) 
		values
			(1, rotendaUserID, 'https://i.imgur.com/inWNK04.jpg'),
			(2, rotendaUserID, 'https://i.imgur.com/nsLnAmo.jpg'),
			(3, rotendaUserID, 'https://i.imgur.com/V1Qvsjp.jpg'),
			(4, cameronUserID, 'https://i.imgur.com/zQDlAl2.jpg'),
			(5, cameronUserID, 'https://i.imgur.com/YYZ2wGL.jpg'),
			(6, cameronUserID, 'https://i.imgur.com/uUtzbjT.jpg'),
			(7, cameronUserID, 'https://i.imgur.com/ZGkslVN.jpg'),
			(8, cameronUserID, 'https://i.imgur.com/mIbkYY3.jpg'),
			(9, katlegoUserID, 'https://i.imgur.com/0xeeupu.jpg'),
			(10, katlegoUserID, 'https://i.imgur.com/lzD8xlY.jpg'),
			(11, katlegoUserID, 'https://i.imgur.com/hmmcp6t.jpg'),
			(12, katlegoUserID, 'https://i.imgur.com/H18fW4x.jpg'),
			(13, katlegoUserID, 'https://i.imgur.com/9aSvg5U.jpg'),
			(14, abdulUserID, 'https://i.imgur.com/oyruWKE.jpg'),
			(15, abdulUserID, 'https://i.imgur.com/9xOOY3k.jpg'),
			(16, abdulUserID, 'https://i.imgur.com/oubQukK.jpg'),
			(17, abdulUserID, 'https://i.imgur.com/faautEE.jpg'),
			(18, abdulUserID, 'https://i.imgur.com/NMGnMU2.jpg');

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
			Web (webID, crawlerID, webTitle) 
		values 
			(1, rotendaUserID, 'Venomous'),
			(2, katlegoUserID, 'Carnivore'),
			(3, cameronUserID, 'Vegetarian'),
			(4, abdulUserID, 'Arially Inclidened');

		-- Getting webIDs
		select webID into venomouswebID from Web where webTitle = 'Venomous';
		select webID into carnivorewebID from Web where webTitle = 'Carnivore';
		select webID into vegetarianwebID from Web where webTitle = 'Vegetarian';
		select webID into aveswebID from Web where webTitle = 'Arially Inclidened';

		-- Adding pins to boards
		insert into 
			WebSpins (webSpinID, webID, spinID) 
		values 
			(1, venomouswebID, blackWidowID),
			(2, venomouswebID, greenSnakeID),
			(3, carnivorewebID, crocodileID),
			(4, carnivorewebID, flamingoID),
			(5, vegetarianwebID, hedgehogID),
			(6, vegetarianwebID, peakokID),
			(7, aveswebID, greenBirdID),
			(8, aveswebID, whiteOwlID);

		-- Creating Tags
		insert into 
			Tag (tagID, tagName) 
		values 
			(1, 'animal'),
			(2, 'mammal'),
			(3, 'amphibian'),
			(4, 'insecta'),
			(5, 'aves'),
			(6, 'reptile'),
			(7, 'carnivore'),
			(8, 'vegetarian');

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
			SpinTags (spinTagID, spinID, tagID) 
		values
			(1, elephantID, animalTagID),
			(2, elephantID, mammalTagID),
			(3, elephantID, vegetarianTagID),
			(4, slothID, animalTagID),
			(5, slothID, mammalTagID),
			(6, slothID, vegetarianTagID),
			(7, greenFrogID, animalTagID),
			(8, greenFrogID, amphibianTagID),
			(9, greenFrogID, vegetarianTagID),
			(10, redFrogID, animalTagID),
			(11, redFrogID, amphibianTagID),
			(12, redFrogID, carnivoreTagID),
			(13, blackWidowID, animalTagID),
			(14, blackWidowID, insectaTagID),
			(15, blackWidowID, carnivoreTagID),
			(16, flamingoID, animalTagID),
			(17, flamingoID, avesTagID),
			(18, flamingoID, carnivoreTagID),
			(19, greenBirdID, animalTagID),
			(20, greenBirdID, avesTagID),
			(21, greenBirdID, vegetarianTagID),
			(22, crocodileID, animalTagID),
			(23, crocodileID, reptileTagID),
			(24, crocodileID, carnivoreTagID),
			(25, greenSnakeID, animalTagID),
			(26, greenSnakeID, reptileTagID),
			(27, greenSnakeID, carnivoreTagID);

		-- Adding Spin Likes
		insert into 
			SpinLikes (spinLikeID, crawlerID, spinID) 
		values
			(1, katlegoUserID, flamingoID),
			(2, cameronUserID, flamingoID),
			(3, rotendaUserID, flamingoID),
			(4, abdulUserID, flamingoID),
			(5, cameronUserID, crocodileID),
			(6, rotendaUserID, crocodileID),
			(7, abdulUserID, crocodileID),
			(8, rotendaUserID, greenSnakeID),
			(9, abdulUserID, greenSnakeID),
			(10, abdulUserID, blackWidowID);

		-- Adding Spin Comments
		insert into 
			SpinComment (spinCommentID, crawlerID, spinID, spinCommentMessage) 
		values 
			(1, katlegoUserID, flamingoID, 'First Comment'),
			(2, cameronUserID, flamingoID, 'This is a cool flamingo'),
			(3, rotendaUserID, flamingoID, 'Who said this was a carnivore!?'),
			(4, abdulUserID, flamingoID, 'How do I go back to the home page?'),
			(5, cameronUserID, crocodileID, 'What a cute little river pupper'),
			(6, rotendaUserID, crocodileID, '@Cameron, you are buggin! THATS NO PUPPER'),
			(7, abdulUserID, crocodileID, 'Guys... I forgot... Home page, please :('),
			(8, rotendaUserID, greenSnakeID, 'We dont get many of these in South Africa'),
			(9, abdulUserID, greenSnakeID, 'FOUND THE HOME PAGE'),
			(10, abdulUserID, blackWidowID, 'If I find you in my house!? Its just your house');

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
			CommentLikes (commentLikeID, spinCommentID, crawlerID) 
		values 
			(1, katlegoFlamingoCommentID, katlegoUserID),
			(2, katlegoFlamingoCommentID, cameronUserID),
			(3, katlegoFlamingoCommentID, rotendaUserID),
			(4, katlegoFlamingoCommentID, abdulUserID),
			(5, rotendaFlamingoCommentID, katlegoUserID),
			(6, rotendaFlamingoCommentID, cameronUserID);
	end;
$$;