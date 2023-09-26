## MomanyiSavvy: What to Know!!

Welcome to MomanyiSavvy, your ultimate destination for cutting-edge technology insights and discoveries. 
In this captivating blog website, we delve into the ever-evolving world of technology, 
exploring the latest trends, innovations, and breakthroughs that are shaping our future.

### About MomanyiSavvy

MomanyiSavvy is not just another blog; it's a virtual portal that takes you on an exhilarating journey through the realms of Tecnlogies(HTML, CSS, JavaScript, React, and Bootstrap 5). Our mission is to empower tech enthusiasts, beginners, and experts alike with in-depth knowledge, tutorials, and engaging content related to these technologies.

- TechTalks - Igniting Innovation

### I have chosen the following technologies,
- HTML, CSS, JavaScript, Bootstrap CSS framework and React for building the frontend
- Django (Python) for my backend
- PostgreSQL Database
- Vercel for hosting
- Git for Version Control System
The website will have an admin interface and user interface
- Admin inerface allows an authenticated user to create, edit and delete blog posts
- The user interface allows  all readers to read and make comments on selected blog posts.
- Blog posts will be in four categories namely: Front-end Development, AI Best Friend, UI/UX Design and Back_end Development.
- Each categories will have various posts
- Posts can be categorised into popular, most recent and highly featured posts

## UML diagram for the blog website
+-------------------+     +-------------------+     +-------------------+
|      User         |     |      Post         |     |    Category       |
+-------------------+     +-------------------+     +-------------------+
| - username        |     | - title           |     | - name            |
| - password        |     | - content         |     | - description     |
| - email           |     | - date_published  |     +-------------------+
| - is_admin        |     | - is_featured     |
+-------------------+     | - is_recent        |
| + create_post()   |     | - is_popular      |
| + edit_post()     |     +-------------------+
| + delete_post()   |     | + add_comment()   |
+-------------------+     | + edit_comment()  |
                          | + delete_comment()|
                          +-------------------+
                               ^     ^     ^
                               |     |     |
+-------------------+     +-----+     |     +-----+
|    Comment        |     |           |           |
+-------------------+     |           |           |
| - content         |     |           |           |
| - date_posted     |     |           |           |
+-------------------+     |           |           |
                          |           |           |
                          |           |           |
+-------------------+     |     +-------------------+
|   FrontendDev     |     |     |   AIBestFriend   |
+-------------------+     |     +-------------------+
                          |     
+-------------------+     |     
|   UIUXDesign      |     |     
+-------------------+     |     
                          |     
+-------------------+     |     
| BackendDev        |     |     
+-------------------+     |     

In this diagram:

- User represents both admin and regular users. It has a boolean attribute is_admin to distinguish between the two. Admin users can create, edit, and delete posts.
- Post represents a blog post. It has a title, content, and date published. It also has boolean attributes to indicate whether it's featured, recent, or popular. Posts can have comments added, edited, or deleted.
- Category represents a category that a post can belong to. It has a name and a description.
- Comment represents a comment on a post. It has content and a date posted.
- FrontendDev, AIBestFriend, UIUXDesign, and BackendDev are subclasses of Category. They represent specific categories of posts.

## DJANGO MODELS
from django.db import models
from django.contrib.auth.models import User

class Category(models.Model):
    name = models.CharField(max_length=200)
    description = models.TextField()

    def __str__(self):
        return self.name

class Post(models.Model):
    title = models.CharField(max_length=200)
    content = models.TextField()
    date_published = models.DateTimeField(auto_now_add=True)
    is_featured = models.BooleanField(default=False)
    is_recent = models.BooleanField(default=False)
    is_popular = models.BooleanField(default=False)
    author = models.ForeignKey(User, on_delete=models.CASCADE)
    category = models.ForeignKey(Category, on_delete=models.CASCADE)

    def __str__(self):
        return self.title

class Comment(models.Model):
    content = models.TextField()
    date_posted = models.DateTimeField(auto_now_add=True)
    post = models.ForeignKey(Post, on_delete=models.CASCADE)
    user = models.ForeignKey(User, on_delete=models.CASCADE)

    def __str__(self):
        return self.content[:50]

In these models:

- Category represents a category that a post can belong to. It has a name and a description.
- Post represents a blog post. It has a title, content, date published, and boolean fields to indicate whether it's featured, recent, or popular. It also has a foreign key to the User model (which represents the author of the post) and a foreign key to the Category model.
- Comment represents a comment on a post. It has content and a date posted. It also has a foreign key to the Post model and a foreign key to the User model (which represents the user who posted the comment).

