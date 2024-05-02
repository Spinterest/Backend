create table GoogleUser (
	googleUserID serial,
	googleUserEmail varchar(255),
	googleUserIsDeleted boolean default false,
	
	constraint google_user_pk primary key (googleUserID),
	constraint google_user_uq unique (googleUserEmail)
);
