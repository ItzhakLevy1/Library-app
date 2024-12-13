package com.luv2code.spring_boot_library.entity;

import lombok.Data; // Lombok annotation for generating boilerplate code like getters, setters, equals, hashCode, and toString.
import javax.persistence.*; // JPA annotations for defining the entity and table mapping.

@Entity // Marks this class as a JPA entity, meaning it will be mapped to a table in the database.
@Table(name = "book") // Maps this entity to the database table named "book".
@Data // Lombok annotation to automatically generate getters, setters, toString, equals, and hashCode methods.
public class Book {

    @Id // Marks this field as the primary key of the table.
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    // Specifies the primary key generation strategy. `IDENTITY` means the database will auto-generate the ID.
    @Column(name = "id") // Maps this field to the "id" column in the database.
    private Long id;

    @Column(name = "title") // Maps this field to the "title" column in the database.
    private String title; // Title of the book.

    @Column(name = "author") // Maps this field to the "author" column in the database.
    private String author; // Author of the book.

    @Column(name = "description") // Maps this field to the "description" column in the database.
    private String description; // Description or summary of the book.

    @Column(name = "copies") // Maps this field to the "copies" column in the database.
    private int copies; // Total number of copies of the book.

    @Column(name = "copies_available") // Maps this field to the "copies_available" column in the database.
    private int copiesAvailable; // Number of copies currently available.

    @Column(name = "category") // Maps this field to the "category" column in the database.
    private String category; // Category or genre of the book (e.g., Fiction, Non-fiction).

    @Column(name = "img") // Maps this field to the "img" column in the database.
    private String img; // Path or URL to the book's cover image.
}
