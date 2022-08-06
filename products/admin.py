from django.contrib import admin
from .models import MainCategory, SubCategory, Product, Size, ProductImages

@admin.register(MainCategory)
class MainCategoryAdmin(admin.ModelAdmin):
    list_display = ("name", "slug")
    prepopulated_fields = {"slug": ("name",)}


@admin.register(SubCategory)
class SubCategoryAdmin(admin.ModelAdmin):
    list_display = ("name", "slug")
    prepopulated_fields = {"slug": ("name",)}

@admin.register(Size)
class SizeAdmin(admin.ModelAdmin):
    list_display = ("name", "slug")
    prepopulated_fields = {"slug": ("name",)}

@admin.register(Product)
class ProductAdmin(admin.ModelAdmin):

    list_display = ("name", "sub_category", "main_category", "price", "available", "slug")
    list_filter = ("sub_category", "main_category", "available", "size")
    list_editable = ("price", "available")
    prepopulated_fields = {"slug": ("name",)}

admin.site.register(ProductImages)
# class ProductAdmin(admin.ModelAdmin):

#     list_filter = ("product",)
