from django.db import models
from django.contrib.auth.models import User
from django.contrib.postgres.fields import ArrayField
from django.urls import reverse


class MainCategory(models.Model):
    """ Main category like kids, men, women"""

    name = models.CharField(max_length=20, unique=True)
    slug = models.SlugField(max_length=100, unique=True)

    class Meta:
        ordering = ('-name',)
        verbose_name_plural = "main Categories"

    def __str__(self):
        return self.name


class SubCategory(models.Model):
    """ sub category like t-shirt, sneakers etc"""

    main_category = models.ForeignKey(MainCategory, related_name = "sub_category", on_delete = models.CASCADE)
    name = models.CharField(max_length=100, unique=True)
    slug = models.SlugField(max_length=100, unique=True)

    class Meta:
        ordering = ('-name',)
        verbose_name_plural = "sub Categories"


    def __str__(self):
        return self.name


class Size(models.Model):
    """ Avaiable sizes model"""

    name = models.CharField(max_length=100, unique=True)
    slug = models.SlugField(max_length=100, unique=True)


    class Meta:
        ordering = ("-name",)

    def __str__(self):
        return self.name


# class Customer(models.Model):
#     user = models.OneToOneField(User, null=True, blank=True, on_delete=models.CASCADE)
#     name = models.CharField(max_length=200, null=True)
#     email = models.CharField(max_length=200)

#     def __str__(self):
# 	return self.name


class Product(models.Model):
    sub_category = models.ForeignKey(SubCategory, related_name = "product", on_delete = models.CASCADE)
    main_category = models.ForeignKey(MainCategory, related_name = "all_product", on_delete = models.CASCADE)
    name = models.CharField(max_length=100, unique=True)
    slug = models.SlugField(max_length=100, unique=True)
    description = models.TextField(blank=True)
    price = models.DecimalField(max_digits=10, decimal_places=2)
    available = models.BooleanField(default=True)
    product_code = models.CharField(max_length=100, unique=True)
    size = models.ManyToManyField(Size)
    new_arrival = models.BooleanField(default=True)
    # image1 = models.ImageField(upload_to="products", null=True, default=True)
    # image2 = models.ImageField(upload_to="products", null=True, blank=True)
    # image3 = models.ImageField(upload_to="products", null=True, blank=True)
    # image4 = models.ImageField(upload_to="products", null=True, blank=True)
    # image5 = models.ImageField(upload_to="products", null=True, blank=True)


    def __str__(self):
        return self.name

    def get_absolute_url(self):
        return reverse('product_detail', args=[str(self.id)])

    class Meta:
        ordering = ("-price",)



#  class Order(models.Model):
# 	customer = models.ForeignKey(Customer, on_delete=models.SET_NULL, null=True, blank=True)
# 	date_ordered = models.DateTimeField(auto_now_add=True)
# 	complete = models.BooleanField(default=False)
# 	transaction_id = models.CharField(max_length=100, null=True)

# 	def __str__(self):
# 		return str(self.id)

# 	@property
# 	def shipping(self):
# 		shipping = False
# 		orderitems = self.orderitem_set.all()
# 		for i in orderitems:
# 			if i.product.digital == False:
# 				shipping = True
# 		return shipping

# 	@property
# 	def get_cart_total(self):
# 		orderitems = self.orderitem_set.all()
# 		total = sum([item.get_total for item in orderitems])
# 		return total

# 	@property
# 	def get_cart_items(self):
# 		orderitems = self.orderitem_set.all()
# 		total = sum([item.quantity for item in orderitems])
# 		return total

# class OrderItem(models.Model):
#     product = models.ForeignKey(Product, on_delete=models.SET_NULL, null=True)
#     order = models.ForeignKey(Order, on_delete=models.SET_NULL, null=True)
#     quantity = models.IntegerField(default=0, null=True, blank=True)
#     date_added = models.DateTimeField(auto_now_add=True)

#     @property
#     def get_total(self):
# 	total = self.product.price * self.quantity
# 	return total

# class ShippingAddress(models.Model):
#     customer = models.ForeignKey(Customer, on_delete=models.SET_NULL, null=True)
#     order = models.ForeignKey(Order, on_delete=models.SET_NULL, null=True)
#     address = models.CharField(max_length=200, null=False)
#     city = models.CharField(max_length=200, null=False)
#     state = models.CharField(max_length=200, null=False)
#     zipcode = models.CharField(max_length=200, null=False)
#     date_added = models.DateTimeField(auto_now_add=True)

#     def __str__(self):
# 	return self.address

class ProductImages(models.Model):
    product = models.ForeignKey(Product, on_delete=models.CASCADE)
    image = models.ImageField(upload_to="media/", null=True)

    def __str__(self):
        return self.product
