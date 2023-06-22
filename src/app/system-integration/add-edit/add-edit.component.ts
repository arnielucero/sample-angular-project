import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';
import { SystemIntegrationService, AlertService } from '../../services';



@Component({ templateUrl: 'add-edit.component.html',  styleUrls: ['./add-edit.component.scss'] })
export class AddEditComponent implements OnInit {
    form!: FormGroup;
    id?: string;
    title!: string;
    loading = false;
    submitting = false;
    submitted = false;

    systemType = [
        {value: 'sap', label: 'SAP'}, 
        {value: 'rdms', label: 'RDMS'},

    ];
    
    connectionType = [
        {value: 'MS Access', label: 'MS Access'}, 
        {value: 'Firebird', label: 'Firebird'},
        {value: 'ODBC', label: 'ODBC'},

    ];

    public href: string = "";
    constructor(
        private formBuilder: FormBuilder,
        private route: ActivatedRoute,
        private router: Router,
        private systemIntegrationService: SystemIntegrationService,
        private alertService: AlertService,
        
    ) { }

    ngOnInit() {
        this.id = this.route.snapshot.params['id'];
        this.href = this.router.url;
        // form with validation rules
        this.form = this.formBuilder.group({
            accountName: ['', Validators.required],
            middleware:[''],
            accountDetails:[''],
            systemType:[''],
            connectionType:[''],
            protocol:[''],
            hostName:[''],
            port:[''],
            schemaSpecific:[''],
            connectionString:[''],
            certificate:[''],
            privateKey:[''],
            secureTunnel:[''],
            status:['InActive'],
        });

        this.title = 'Add New System';
        if (this.id) {
            // edit mode
            this.title = 'Edit System';
            this.loading = true;
            this.systemIntegrationService.getById(this.id)
                .pipe(first())
                .subscribe(x => {
                    this.form.patchValue(x);
                    this.loading = false;
            });
        }
    }

    // convenience getter for easy access to form fields
    get f() { return this.form.controls; }

    onSubmit() {
        this.submitted = true;
        // reset alerts on submit
        this.alertService.clear();

        // stop here if form is invalid
        if (this.form.invalid) {
            return;
        }

        this.submitting = true;
        this.saveSystemIntegration()
            .pipe(first())
            .subscribe({
                next: () => {
                    this.alertService.success('System Integration has been saved', { keepAfterRouteChange: true, autoClose: true });
                    this.router.navigateByUrl('/data-warehouse/system-integration');
                },
                error: error => {
                    this.alertService.error(error);
                    this.submitting = false;
                }
            })
    }

    private saveSystemIntegration() {
        return this.id
            ? this.systemIntegrationService.update(this.id!, this.form.value)
            : this.systemIntegrationService.create(this.form.value);
    }

    testConnection() {
        if (this.form.invalid) {
            this.alertService.error('Connection Error', { keepAfterRouteChange: true, autoClose: true });
            return
        } else {
            this.alertService.success('Connection Successful', { keepAfterRouteChange: true, autoClose: true });
            this.router.navigateByUrl(this.href);
            return false
        }
    }
}