package com.luv2code.spring_boot_library.config;

import com.luv2code.spring_boot_library.entity.Book;  // Importing the Book entity
import org.springframework.context.annotation.Configuration;  // Importing the Configuration annotation
import org.springframework.data.rest.core.config.RepositoryRestConfiguration;  // For configuring Spring Data REST
import org.springframework.data.rest.webmvc.config.RepositoryRestConfigurer;  // For customizing Spring Data REST settings
import org.springframework.http.HttpMethod;  // For working with HTTP methods (GET, POST, etc.)
import org.springframework.web.servlet.config.annotation.CorsRegistry;  // For configuring CORS settings

// Marking this class as a Configuration class for Spring Boot
@Configuration
public class MyDataRestConfig implements RepositoryRestConfigurer {

    // Defining the allowed origin for CORS requests (usually where the front end runs)
    private String theAllowedOrigins = "http://localhost:3000";

    // Overriding the method to configure repository REST settings
    @Override
    public void configureRepositoryRestConfiguration(RepositoryRestConfiguration config, CorsRegistry cors) {

        // Defining the unsupported HTTP methods for the 'Book' entity
        HttpMethod[] theUnsupportedActions = {
                HttpMethod.POST,  // POST requests will not be allowed
                HttpMethod.PATCH, // PATCH requests will not be allowed
                HttpMethod.DELETE, // DELETE requests will not be allowed
                HttpMethod.PUT // PUT requests will not be allowed
        };

        // Exposing the 'id' property of the Book class (making it accessible in the REST API)
        config.exposeIdsFor(Book.class);

        // Disabling the unsupported HTTP methods for the 'Book' entity
        disableHttpMethods(Book.class, config, theUnsupportedActions);

        /* Configuring Cross-Origin Resource Sharing (CORS) settings */
        // This allows requests from the specified origin (localhost:3000 in this case)
        cors.addMapping(config.getBasePath() + "/**") // Allow CORS for all REST API paths
                .allowedOrigins(theAllowedOrigins); // Allow only requests from localhost:3000
    }

    // Helper method to disable specific HTTP methods for a given entity
    private void disableHttpMethods(Class theClass, RepositoryRestConfiguration config, HttpMethod[] theUnsupportedActions) {
        // Disabling the specified HTTP methods (POST, PUT, DELETE, PATCH) for the given entity
        config.getExposureConfiguration().forDomainType(theClass)
                .withItemExposure((metdata, httpMethods) -> httpMethods.disable(theUnsupportedActions))
                .withCollectionExposure((metdata, httpMethods) ->
                        httpMethods.disable(theUnsupportedActions));
    }
}
