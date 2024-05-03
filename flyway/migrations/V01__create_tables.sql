drop table if exists CommentLikes;
drop table if exists SpinLikes;
drop table if exists SpinTags;
drop table if exists Tag;
drop table if exists WebSpins;
drop table if exists SpinComment;
drop table if exists Web;
drop table if exists Spin;
drop table if exists Crawler;

create table Crawler (
	crawlerID serial,
	crawlerEmail varchar(255),
	crawlerIsDeleted boolean default false,
	
	constraint crawler_pk primary key (crawlerID),
	constraint crawler_uq unique (crawlerEmail)
);

create table Spin (
	spinID serial,
	crawlerID int not null,
	spinLink varchar(255) not null,
	spinIsDeleted boolean default false,
	spinTitle varchar(50) not null default '',
	spinDescription varchar(255) not null default '',
	spinTimestamp timestamp default current_timestamp,
	
	constraint spin_pk primary key (spinID),
	constraint spin_crawler_fk foreign key (crawlerID) references Crawler(crawlerID)
);

create table Web(
	webID serial,
	crawlerID int not null,
	webIsDeleted boolean default false,
	webTitle varchar(50) not null,
	
	constraint web_pk primary key (webID),
	constraint web_crawler_fk foreign key (crawlerID) references Crawler(crawlerID)
);

create table Tag(
	tagID serial,
	tagName varchar(50) not null,
	
	constraint tag_pk primary key (tagID),
	constraint tag_uq unique (tagName)
);

create table WebSpins(
	webSpinID serial,
	webID int not null,
	spinID int not null,
	
	constraint web_spins_pk primary key (webSpinID),
	constraint web_spins_web_fk foreign key (webID) references Web(webID),
	constraint web_spins_pin_fk foreign key (spinID) references Spin(spinID),
	constraint web_spins_web_spin_uq unique (webID, spinID)
);

create table SpinComment(
	spinCommentID serial,
	crawlerID int not null,
	spinID int not null,
	spinCommentMessage varchar(255) not null,
	spinCommentTimestamp timestamp default current_timestamp,
	spinCommentIsDeleted boolean default false,
	
	constraint spin_comment_pk primary key (spinCommentID),
	constraint spin_comment__crawler_fk foreign key (crawlerID) references Crawler(crawlerID),
	constraint spin_comment_spin_fk foreign key (spinID) references Spin(spinID)
);

create table SpinTags(
	spinTagID serial,
	spinID int not null,
	tagID int not null,
	
	constraint spin_tags_pk primary key (spinTagID),
	constraint spin_tags_pin_fk foreign key (spinID) references Spin(spinID),
	constraint spin_tags_tag_fk foreign key (tagID) references Tag(tagID),
	constraint spin_tags_spin_tag_uq unique (spinID, tagID)
);

create table SpinLikes(
	spinLikeID serial,
	crawlerID int not null,
	spinID int not null,
	
	constraint spin_likes_pk primary key (spinLikeID),
	constraint spin_likes__crawler_fk foreign key (crawlerID) references Crawler(crawlerID),
	constraint spin_likes_spin_fk foreign key (spinID) references Spin(spinID),
	constraint spin_likes__crawler_spin_uq unique (crawlerID, spinID)
);

create table CommentLikes(
	commentLikeID serial,
	spinCommentID int not null,
	crawlerID int not null,
	
	constraint comment_likes_pk primary key (commentLikeID),
	constraint comment_likes__crawler_fk foreign key (spinCommentID) references SpinComment(spinCommentID),
	constraint comment_likes_spin_fk foreign key (crawlerID) references Crawler(crawlerID),
	constraint comment_likes_spin_comment__crawler_uq unique (spinCommentID, crawlerID)
);
