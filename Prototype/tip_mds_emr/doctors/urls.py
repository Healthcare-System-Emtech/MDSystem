"""
URL configuration for doctors app.
"""

from django.urls import path
from . import views

app_name = 'doctors'

urlpatterns = [
    # Dashboard
    path('dashboard/', views.doctor_dashboard, name='dashboard'),
    
    # Student Search & Records
    path('search/', views.search_student, name='search'),
    path('records/create/<str:student_id>/', views.create_medical_record, name='create_record'),
    
    # Pending Requests
    path('pending/', views.pending_requests, name='pending'),
    path('requests/<uuid:request_id>/approve/', views.approve_update_request, name='approve_request'),
    path('requests/<uuid:request_id>/decline/', views.decline_update_request, name='decline_request'),
    
    # Appointments Management
    path('appointments/', views.manage_appointments, name='appointments'),
    path('appointments/<uuid:appointment_id>/approve/', views.approve_appointment, name='approve_appointment'),
    
    # Templates & Certificates
    path('templates/', views.templates_management, name='templates'),
    path('certificates/generate/', views.generate_certificate, name='generate_certificate'),
    
    # Analytics & Reports
    path('analytics/', views.analytics_dashboard, name='analytics'),
    path('reports/export/', views.export_report, name='export_report'),
    
    # Settings
    path('settings/', views.settings_view, name='settings'),
]