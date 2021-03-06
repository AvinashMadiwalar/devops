package vehicaldataanalysisserver.vehicaldataanalysisserver;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.jdbc.DataSourceAutoConfiguration;
import org.springframework.boot.autoconfigure.security.servlet.SecurityAutoConfiguration;
import org.springframework.security.config.annotation.method.configuration.EnableGlobalMethodSecurity;
import org.springframework.security.oauth2.config.annotation.web.configuration.EnableResourceServer;

@EnableResourceServer
@EnableGlobalMethodSecurity(prePostEnabled = true)
@SpringBootApplication(exclude = {DataSourceAutoConfiguration.class , SecurityAutoConfiguration.class})
public class  VehicalDataAnalysisServerApplication {

    public static void main(String[] args) {
        SpringApplication.run(VehicalDataAnalysisServerApplication.class, args);
    }

}
